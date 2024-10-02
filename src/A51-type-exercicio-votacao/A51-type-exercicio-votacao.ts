type Candidate = {
  name: string,
  votes: number,
}

export class Voting {

  constructor (
    public candidate1: Candidate,
    public candidate2: Candidate,
    public candidate3: Candidate,
  ) {
      this.candidate1 = candidate1;
      this.candidate2 = candidate2;
      this.candidate3 = candidate3;
  }

  addVote(name: string) {
    for (const [key, value] of Object.entries(this)) {
      if (value.name === name) {
        value.votes += 1;
      }
    }
  }
}

class Category {
  constructor (
    public votingData: Voting,
    public name: string
  ) {
    this.votingData = votingData
  }

}

class ClassVoting {
  constructor (
    public categories: Category[],
  ) {
    this.categories = categories;
  }

  addCategory(...categories: Category[]): void {
    this.categories.push(...categories);
  }

  showVotingResult(categories: Category[]= this.categories): void {
    for (const cat of categories) {
      console.log(`Which ${cat.name} do you prefer?`)
      for (const [key, value] of Object.entries(cat.votingData)) {
        console.log(`${value.name}: ${value.votes}`)
      }
      console.log(`///////////////////////////////////////////`)
      console.log()
    }
  }
  }

const red = { name: "red", votes: 0 };
const blue = { name: "blue", votes: 0 };
const green = { name: "green", votes: 0 };

const python = { name: "python", votes: 0 };
const JS = { name: "JS", votes: 0 };
const TS = { name: "TS", votes: 0 };

const programmingVoting = new Voting( python, JS, TS );
const colorVoting = new Voting( red, blue, green );

const progCategory = new Category(programmingVoting, 'Programming Language');
const colorCategory = new Category(colorVoting, 'Color');

progCategory.votingData.addVote('python');
progCategory.votingData.addVote('python');
progCategory.votingData.addVote('python');
progCategory.votingData.addVote('JS');

colorCategory.votingData.addVote('red');
colorCategory.votingData.addVote('red');
colorCategory.votingData.addVote('red');
colorCategory.votingData.addVote('blue');

const votingApp = new ClassVoting([progCategory, colorCategory]);

votingApp.showVotingResult()
