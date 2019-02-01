workflow "Deploy the Site" {
  on = "push"
  resolves = ["Now"]
}

action "Now" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  runs = "now"
}
