import Behavior from './behavior.js';

class TestBehavior extends Behavior {
  constructor(settings = {}) {
    settings.name = settings.name || 'Greet On Start';

    super(settings);
  }

  initialize(bot) {
    super.initialize(bot);

    const name = this.name,
      thought = `I'm learning with the ${name} behavior!`;

    bot.say('#drop-the-beatz', thought, { });
    this.scheduleJob('*/5 * * * * *', () => {
      bot.say('#drop-the-beatz', 'I am super chatty!');
    });
  }
}

export default TestBehavior;