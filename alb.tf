resource "aws_lb" "app_lb" {
  name               = "app-lb"
  load_balancer_type = "application"

  subnets = [
    aws_subnet.public_1a.id,
    aws_subnet.public_1b.id
  ]

  security_groups = [aws_security_group.alb_sg.id]
}

resource "aws_lb_listener" "main" {
  load_balancer_arn = aws_lb.app_lb.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.app_tg.arn
  }
}