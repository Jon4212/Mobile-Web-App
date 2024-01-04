resource "aws_s3_bucket" "ara_buck" {
  bucket = "jara-bucket"

  tags = {
    Name        = "ara-buck"
    Environment = "Dev"
  }
}

