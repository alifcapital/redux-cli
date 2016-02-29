import commander from 'commander';
import { version } from '../version';
import Generate from '../sub-commands/generate';

const subCommand = new Generate();

commander.on('--help', () => {
  subCommand.printUserHelp();
});

commander
  .version(version())
  .arguments('<blueprint> [entity name]')
  .description('generates code based off a blueprint')
  .action((blueprintName, entityName) => {
    const cliArgs = {
      entity: {
        name: entityName,
        options: {}
      }
    };
    subCommand.run(blueprintName, cliArgs);

    /*
     * blueprint arg structure:
     * {
     *  entity: {
     *    name: 'foo',
     *    options: {
     *      type: 'button'
     *    }
     *  },
     * }
     */
  })
  .parse(process.argv);


