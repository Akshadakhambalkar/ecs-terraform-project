terraform {
  backend "s3" {
    bucket = "ak-ecs-terraform-state-123"
    key    = "ecs/terraform.tfstate"
    region = "ap-south-1"
  }
}