output "bucket_name" {
  description = "Provisioned S3 bucket name"
  value       = aws_s3_bucket.static_site_bucket.bucket
}

output "bucket_arn" {
  description = "ARN of the S3 bucket"
  value       = aws_s3_bucket.static_site_bucket.arn
}
