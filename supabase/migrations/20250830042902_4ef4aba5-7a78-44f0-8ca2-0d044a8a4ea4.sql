
-- Create purchases table
CREATE TABLE purchases (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  stripe_session_id VARCHAR(255) UNIQUE NOT NULL,
  stripe_payment_intent_id VARCHAR(255),
  amount INTEGER NOT NULL, -- amount in cents (2700 for $27)
  status VARCHAR(50) DEFAULT 'pending',
  customer_name VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create downloads table  
CREATE TABLE downloads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  purchase_id UUID REFERENCES purchases(id),
  email VARCHAR(255) NOT NULL,
  download_token VARCHAR(255) UNIQUE NOT NULL,
  download_count INTEGER DEFAULT 0,
  last_downloaded_at TIMESTAMP WITH TIME ZONE,
  expires_at TIMESTAMP WITH TIME ZONE DEFAULT (NOW() + INTERVAL '30 days'),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create support_tickets table
CREATE TABLE support_tickets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(500) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'open',
  purchase_id UUID REFERENCES purchases(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create email_logs table
CREATE TABLE email_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  type VARCHAR(100) NOT NULL, -- 'purchase_confirmation', 'download_reminder', etc.
  status VARCHAR(50) NOT NULL, -- 'sent', 'failed', 'pending'
  provider VARCHAR(50) NOT NULL, -- 'resend', 'sendgrid', etc.
  provider_message_id VARCHAR(255),
  error_message TEXT,
  purchase_id UUID REFERENCES purchases(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE purchases ENABLE ROW LEVEL SECURITY;
ALTER TABLE downloads ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_logs ENABLE ROW LEVEL SECURITY;

-- Create policies for secure access
-- Purchases policies
CREATE POLICY "Allow read own purchases" ON purchases
FOR SELECT USING (auth.jwt() ->> 'email' = email);

-- Downloads policies  
CREATE POLICY "Allow read own downloads" ON downloads
FOR SELECT USING (auth.jwt() ->> 'email' = email);

-- Support tickets policies
CREATE POLICY "Allow users to create support tickets" ON support_tickets
FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow users to read their own tickets" ON support_tickets
FOR SELECT USING (auth.jwt() ->> 'email' = email);

-- Function to create secure download token
CREATE OR REPLACE FUNCTION create_download_token(
  p_purchase_id UUID,
  p_email VARCHAR(255)
)
RETURNS VARCHAR(255)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  download_token VARCHAR(255);
BEGIN
  -- Generate secure random token
  download_token := encode(gen_random_bytes(32), 'hex');
  
  -- Insert download record
  INSERT INTO downloads (purchase_id, email, download_token)
  VALUES (p_purchase_id, p_email, download_token);
  
  RETURN download_token;
END;
$$;

-- Function to validate download token
CREATE OR REPLACE FUNCTION validate_download_token(
  p_token VARCHAR(255)
)
RETURNS TABLE(
  is_valid BOOLEAN,
  email VARCHAR(255),
  download_count INTEGER,
  expires_at TIMESTAMP WITH TIME ZONE
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    (d.expires_at > NOW()) as is_valid,
    d.email,
    d.download_count,
    d.expires_at
  FROM downloads d
  WHERE d.download_token = p_token;
END;
$$;
