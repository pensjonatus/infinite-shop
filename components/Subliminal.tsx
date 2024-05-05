const messages = [
  "Do things feel right?",
  "Are you feeling okay?",
  "Everything is temporary",
  "This is all that we are",
  "I once had a dream",
  "I once had a soul",
  "Wherefore art thou?",
  "Sing to yourself",
  "When I am alone, I can be myself",
  "You can get through this",
  "You are yourself, no matter where you are",
  "I like Dark Souls",
  "I feel slightly better",
  "Never before have I experiences such a thing",
  "Powerful emotions",
  "It's okay to feel",
  "Suddenly, I looked at my surroundings, transfixed",
  "When I was you, I was happy",
  "Be in the moment",
  "There is nothing for you out there",
  "The world is yours",
  "Pretend you're cool",
  "Get therapy, please",
  "You hurt me!",
  "Magnificent discounts are sure to come your way",
  "There's a room at the end",
  "Come take a walk down the hallway",
  "Do you know your neighbors?",
  "I love you!",
  "You are my lamb",
  "You would walk away from me?",
  "Where am I? What is this place?",
  "I never signed up for this",
  "There's a thudding noise outside",
  "Shop!",
  "Have you done the dishes?",
  "Are you putting anything off?",
  "I am enjoying this",
  "What is art?",
  "What questions do you ask yourself?",
  "What do you expect from others?",
  "Is your father proud?",
  "Do you care about people?",
  "What can regular people like us do?",
  "I wish I was someone cool",
  "I wish I had something to say that people would care about",
  "I wish I could bring others hope",
  "What can I get you?",
  "Strictly speaking, this does not matter",
  "What inspires you?",
  "If they made a move about you, what would happen in it?",
  "Have you discovered all the secrets?",
];

export default function Subliminal() {
  const isSubliminalTime = Math.random() < 0.01;
  const randomIndex = Math.floor(Math.random() * messages.length);

  if (isSubliminalTime) {
    return (
      <p className="absolute bottom-0 right-0 text-sm">
        {messages[randomIndex]}
      </p>
    );
  }

  return null;
}
