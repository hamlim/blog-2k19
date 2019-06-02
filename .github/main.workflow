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

action "Deploy" {
  needs = "Build site"
  uses = "actions/zeit-now@master"
  secrets = [
    "ZEIT_TOKEN",
  ]
}

action "Alias" {
  uses = "actions/zeit-now@master"
  needs = ["On Master", "Deploy"]
  args = "alias"
  secrets = ["ZEIT_TOKEN"]
}
