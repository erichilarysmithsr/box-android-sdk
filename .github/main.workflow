workflow "New workflow" {
  on = "push"
  resolves = ["GitHub Action for npm"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  secrets = ["GITHUB_TOKEN"]
}

workflow "New workflow 1" {
  on = "push"
  resolves = ["GitHub Action for Azure"]
}

action "GitHub Action for Azure" {
  uses = "actions/azure@4919f1449100fb0e6111a52466de7f2a1dc861dc"
  secrets = ["GITHUB_TOKEN"]
}

workflow "New workflow 2" {
  on = "push"
  resolves = ["GitHub Action for Maven"]
}

action "GitHub Action for Maven" {
  uses = "LucaFeger/action-maven-cli@aed8a1fd96b459b9a0be4b42a5863843cc70724e"
  secrets = ["GITHUB_TOKEN"]
}
