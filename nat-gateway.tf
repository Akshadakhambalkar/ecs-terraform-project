resource "aws_eip" "nat" {}

resource "aws_nat_gateway" "nat" {
  subnet_id     = aws_subnet.public_1a.id
  allocation_id = aws_eip.nat.id
}