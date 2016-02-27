import { which } from 'shelljs';
import SubCommand from '../models/subCommand';
import CreateAndStepIntoDirectory from '../tasks/create-and-step-into-directory';
// import GitPull from '../tasks/git-pull';

class New extends SubCommand {
  constructor() {
    super();

    this.createDirTask = new CreateAndStepIntoDirectory(this.environment);
    // this.gitPullTask = new GitPull(this.environment);
  }

  run(cliArgs) {
    this.confirmGit();
  }

  confirmGit() {
    if (!which('git')) {
      this.ui.writeError('This script requires you have git installed');
      this.ui.writeInfo('If you have homebrew installed try: brew install git');
      process.exit(1);
    }
  }
}

export default New;
