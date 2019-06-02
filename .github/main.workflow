workflow "Build and Deploy on Push" {
  on = "push"
  resolves = ["Alias"]
}

action "On Master" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Install dependencies" {
  uses = "nuxt/actions-yarn@master"
  runs = "yarn install"
}

action "Build site" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Install dependencies"]
  runs = "yarn build"
}

action "Deploy to Now" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Build site"]
  runs = "yarn deploy"
}

action "Alias" {
  needs = "On Master"
  uses = "actions/zeit-now@5c51b26db987d15a0133e4c760924896b4f1512f"
  needs = ["Deploy to Now"]
  runs = "alias"
  secrets = ["ZEIT_TOKEN"]
}
