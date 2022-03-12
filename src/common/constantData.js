import Images from "../assets/images";

/** List of static text **/
const staticText = {
    cardOptions: [
        { id: 1, title: 'Top-up acccount', desc: 'Deposit money to your account to use with card', image: Images.upload1, showSwitch: false },
        { id: 2, title: 'Weekly speed limit', desc: 'Your weekly spending limit is $$ 5,000', image: Images.meter, showSwitch: true },
        { id: 3, title: 'Freeze card', desc: 'Your debit card is currently active', image: Images.snow, showSwitch: true },
        { id: 4, title: 'Get a new card', desc: 'This deactivates your current debit card', image: Images.card, showSwitch: false },
        { id: 5, title: 'Deactivated cards', desc: 'Your previously deactivated cards', image: Images.danger, showSwitch: false },
    ]
}
export default staticText;