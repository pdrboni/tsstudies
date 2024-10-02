type VotingOption = {
  numberOfVotes: number;
  option: string;
};

export class Voting {
  private _votingOptions: VotingOption[] = [];
  constructor (public phrase: string) {}

  addVotingOption(votingOption: VotingOption): void {
    this._votingOptions.push(votingOption)
  }

  vote(votingIndex: number) {
    if (!this._votingOptions[votingIndex]) return;
    this._votingOptions[votingIndex].numberOfVotes += 1;
  }

  get votingOptions(): VotingOption[] {
    return this._votingOptions;
  }
}

export class VotingApp {
  private polls: Voting[] = []

  addVoting(voting: Voting) {
    this.polls.push(voting);
  }

  showPolls(): void {
    for (const voting of this.polls) {
      console.log(voting.phrase);
      for (const votingOption of voting.votingOptions) {
        console.log(votingOption.option, votingOption.numberOfVotes);
      }
      console.log('########')
      console.log('')
    }
  }
}

const voting1 = new Voting('Which programming language do you prefer?');
voting1.addVotingOption({option: 'Python', numberOfVotes: 0});
voting1.addVotingOption({option: 'JS', numberOfVotes: 0});
voting1.addVotingOption({option: 'TS', numberOfVotes: 0});
voting1.vote(1);
voting1.vote(1);
voting1.vote(0);
voting1.vote(0);
voting1.vote(0);
voting1.vote(2);

const voting2 = new Voting('Which color do you prefer?');
voting2.addVotingOption({option: 'Red', numberOfVotes: 0});
voting2.addVotingOption({option: 'Blue', numberOfVotes: 0});
voting2.addVotingOption({option: 'Green', numberOfVotes: 0});
voting2.addVotingOption({option: 'Brown', numberOfVotes: 0});
voting2.vote(0);
voting2.vote(2);
voting2.vote(2);
voting2.vote(1);
voting2.vote(3);
voting2.vote(2);

const votationApp = new VotingApp();
votationApp.addVoting(voting1);
votationApp.addVoting(voting2);

votationApp.showPolls();
