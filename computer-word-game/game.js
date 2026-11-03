const WORDS = [
  {
    word: "elephant",
    hints: [
      "It is alive.",
      "It is bigger than a car.",
      "It lives on land.",
      "You can see it at a zoo.",
      "It has a long trunk.",
      "It has tusks and huge ears.",
    ],
  },
  {
    word: "penguin",
    hints: [
      "It is an animal.",
      "It is a bird.",
      "It cannot fly.",
      "It loves the cold.",
      "It is black and white.",
      "It slides on its belly.",
    ],
  },
  {
    word: "volcano",
    hints: [
      "It is part of the earth.",
      "It can be dangerous.",
      "It is a kind of mountain.",
      "It can erupt.",
      "Hot lava comes out of it.",
      "Smoke and ash may rise from it.",
    ],
  },
  {
    word: "bicycle",
    hints: [
      "People use it.",
      "It helps you travel.",
      "It has two wheels.",
      "You pedal to make it go.",
      "You steer with handlebars.",
      "Riders often wear a helmet.",
    ],
  },
  {
    word: "umbrella",
    hints: [
      "You can hold it.",
      "You take it outside.",
      "It opens and closes.",
      "It helps in bad weather.",
      "It keeps rain off you.",
      "The top is a round canopy.",
    ],
  },
  {
    word: "guitar",
    hints: [
      "People made it.",
      "It is used for music.",
      "You hold it against you.",
      "It has strings.",
      "You strum or pluck it.",
      "It can be acoustic or electric.",
    ],
  },
  {
    word: "sandwich",
    hints: [
      "You can eat it.",
      "It is a common lunch.",
      "It uses slices of bread.",
      "The filling sits in the middle.",
      "You can hold it in one hand.",
      "Peanut butter and jelly is one kind.",
    ],
  },
  {
    word: "rainbow",
    hints: [
      "You can see it.",
      "It appears in the sky.",
      "It shows up after rain.",
      "Sunlight helps make it.",
      "It is a giant curve.",
      "It has bands of many colors.",
    ],
  },
  {
    word: "castle",
    hints: [
      "It is a place.",
      "People built it long ago.",
      "Royals used to live there.",
      "It is made of stone.",
      "It may have towers and walls.",
      "A moat might surround it.",
    ],
  },
  {
    word: "octopus",
    hints: [
      "It is an animal.",
      "It lives in the ocean.",
      "It has no bones.",
      "It can squirt ink.",
      "It is very clever.",
      "It has eight arms.",
    ],
  },
  {
    word: "popcorn",
    hints: [
      "You can eat it.",
      "It is a snack.",
      "People eat it at movies.",
      "It starts as a hard kernel.",
      "Heat makes it burst open.",
      "It is light and fluffy.",
    ],
  },
  {
    word: "dinosaur",
    hints: [
      "It lived long ago.",
      "None are alive today.",
      "Fossils tell us about it.",
      "Some were enormous.",
      "Some walked on two legs.",
      "The T. rex is a famous one.",
    ],
  },
  {
    word: "lighthouse",
    hints: [
      "It is a building.",
      "It stands near the sea.",
      "It is very tall.",
      "A bright light shines from it.",
      "It warns ships at night.",
      "Keepers once lived inside.",
    ],
  },
  {
    word: "kangaroo",
    hints: [
      "It is an animal.",
      "It lives in Australia.",
      "Its back legs are strong.",
      "It hops to get around.",
      "It has a long thick tail.",
      "A baby rides in its pouch.",
    ],
  },
  {
    word: "pyramid",
    hints: [
      "It is a structure.",
      "People built it long ago.",
      "Famous ones are in Egypt.",
      "It is made of stone blocks.",
      "Each side is a triangle.",
      "Pharaohs were buried inside.",
    ],
  },
  {
    word: "jellyfish",
    hints: [
      "It is an animal.",
      "It lives in the ocean.",
      "It is soft and see-through.",
      "It drifts through the water.",
      "Its tentacles can sting.",
      "It looks a bit like jelly.",
    ],
  },
  {
    word: "tornado",
    hints: [
      "It is a kind of weather.",
      "It is a violent storm.",
      "It spins very fast.",
      "It can wreck buildings.",
      "It looks like a funnel.",
      "It reaches from cloud to ground.",
    ],
  },
  {
    word: "backpack",
    hints: [
      "People use it.",
      "You carry things in it.",
      "Students bring it to school.",
      "It has shoulder straps.",
      "You wear it on your back.",
      "Books and a bottle fit inside.",
    ],
  },
  {
    word: "snowflake",
    hints: [
      "It is very small.",
      "You see it in winter.",
      "It falls from clouds.",
      "It is made of ice.",
      "It has six sides.",
      "No two look exactly alike.",
    ],
  },
  {
    word: "submarine",
    hints: [
      "People built it.",
      "It goes on missions.",
      "It travels through water.",
      "It can dive deep.",
      "A crew rides inside.",
      "A periscope lets it see above.",
    ],
  },
  {
    word: "butterfly",
    hints: [
      "It is an animal.",
      "It is an insect.",
      "Its wings have bright colors.",
      "It begins as a caterpillar.",
      "It drinks from flowers.",
      "It flutters through the air.",
    ],
  },
  {
    word: "mountain",
    hints: [
      "It is part of the land.",
      "It is very tall.",
      "People like to climb it.",
      "Snow may cover the top.",
      "It can rise above the clouds.",
      "The highest point is the peak.",
    ],
  },
  {
    word: "compass",
    hints: [
      "It is a tool.",
      "It fits in your hand.",
      "Explorers carry it.",
      "It helps you find your way.",
      "It has a small needle.",
      "That needle points north.",
    ],
  },
  {
    word: "pineapple",
    hints: [
      "You can eat it.",
      "It is a fruit.",
      "It grows where it is warm.",
      "The outside is rough and spiky.",
      "The inside is yellow and sweet.",
      "A crown of leaves sits on top.",
    ],
  },
  {
    word: "helicopter",
    hints: [
      "People ride in it.",
      "It flies through the air.",
      "It can hover in one place.",
      "Blades spin above it.",
      "It lifts straight off the ground.",
      "It does not need a long runway.",
    ],
  },
  {
    word: "treasure",
    hints: [
      "People search for it.",
      "Pirates wanted it.",
      "It may be gold and jewels.",
      "It is often hidden.",
      "A map can lead the way.",
      "It is kept in a chest.",
    ],
  },
  {
    word: "skeleton",
    hints: [
      "It is part of a body.",
      "It is hard and pale.",
      "It holds the body up.",
      "It is made of bones.",
      "You have one inside you.",
      "A skull sits at the top.",
    ],
  },
  {
    word: "waterfall",
    hints: [
      "It is found outdoors.",
      "Water moves through it.",
      "It is loud up close.",
      "A river drops downward.",
      "It spills over a cliff.",
      "Mist rises at the bottom.",
    ],
  },
  {
    word: "dragonfly",
    hints: [
      "It is an animal.",
      "It is an insect.",
      "It has long clear wings.",
      "It can hover, then dart.",
      "It lives near ponds.",
      "Its body is long and thin.",
    ],
  },
  {
    word: "marshmallow",
    hints: [
      "You can eat it.",
      "It is a sweet treat.",
      "It is soft and white.",
      "You can squish it.",
      "People roast it on a stick.",
      "It goes on top of s'mores.",
    ],
  },
  {
    word: "iceberg",
    hints: [
      "It is found in nature.",
      "It is extremely cold.",
      "It floats in the ocean.",
      "It is a huge chunk of ice.",
      "Most of it hides underwater.",
      "Ships steer clear of it.",
    ],
  },
  {
    word: "saxophone",
    hints: [
      "People made it.",
      "It makes music.",
      "Jazz players use it.",
      "It is made of brass.",
      "You blow into a mouthpiece.",
      "The body curves and has keys.",
    ],
  },
  {
    word: "banana",
    hints: [
      "You can eat it.",
      "It is a fruit.",
      "It grows in bunches.",
      "You peel it before eating.",
      "The inside is soft and sweet.",
      "Monkeys are famous for liking it.",
    ],
  },
  {
    word: "robot",
    hints: [
      "People built it.",
      "It is a machine.",
      "It can move by itself.",
      "It is often made of metal.",
      "Future stories are full of them.",
      "Lights may stand in for eyes.",
    ],
  },
  {
    word: "camera",
    hints: [
      "People use it.",
      "It is a tool.",
      "It captures what you see.",
      "A lens sits on the front.",
      "A click means a picture was taken.",
      "Photos and videos come from it.",
    ],
  },
  {
    word: "rocket",
    hints: [
      "People built it.",
      "It travels very fast.",
      "Fire blasts from the bottom.",
      "It points up as it leaves the ground.",
      "It can reach outer space.",
      "Astronauts may ride inside.",
    ],
  },
  {
    word: "island",
    hints: [
      "It is a place.",
      "It is a piece of land.",
      "Water surrounds it on every side.",
      "A boat can take you there.",
      "Beaches often line the edge.",
      "A whole country can be one.",
    ],
  },
  {
    word: "wizard",
    hints: [
      "It appears in stories.",
      "It is a kind of person.",
      "It can use magic.",
      "A pointed hat is common.",
      "A wand helps it cast spells.",
      "Robes and a long beard are usual.",
    ],
  },
  {
    word: "donut",
    hints: [
      "You can eat it.",
      "It is a sweet treat.",
      "It is fried and round.",
      "A hole goes through the middle.",
      "Frosting may cover the top.",
      "Sprinkles are a popular topping.",
    ],
  },
  {
    word: "pirate",
    hints: [
      "It is a kind of person.",
      "Adventure stories include one.",
      "It sails on a ship.",
      "It searches for hidden riches.",
      "An eye patch completes the look.",
      "A bird may sit on its shoulder.",
    ],
  },
  {
    word: "clock",
    hints: [
      "People use it every day.",
      "It tells you the time.",
      "It may hang on a wall.",
      "The face is usually round.",
      "Hands move slowly around it.",
      "You can hear it tick.",
    ],
  },
  {
    word: "mirror",
    hints: [
      "People use it.",
      "It is flat and smooth.",
      "Bathrooms usually have one.",
      "It is made of glass.",
      "You look at it to check yourself.",
      "It shows a backward copy of you.",
    ],
  },
  {
    word: "turtle",
    hints: [
      "It is an animal.",
      "It moves very slowly.",
      "It can live on land or in water.",
      "A hard shell covers its back.",
      "It can pull its head inside.",
      "It has a beak and lays eggs.",
    ],
  },
  {
    word: "cactus",
    hints: [
      "It is alive.",
      "It is a kind of plant.",
      "It grows where rain is rare.",
      "Water is stored inside it.",
      "Sharp spines cover the outside.",
      "Hugging it would be a bad idea.",
    ],
  },
  {
    word: "violin",
    hints: [
      "People made it.",
      "It is used for music.",
      "It is held under the chin.",
      "Four strings run along it.",
      "A bow is drawn across them.",
      "Orchestras have a whole section.",
    ],
  },
  {
    word: "igloo",
    hints: [
      "It is a building.",
      "People can sleep inside.",
      "It belongs in a very cold place.",
      "Blocks of snow form the walls.",
      "The shape is a round dome.",
      "A short tunnel may be the door.",
    ],
  },
  {
    word: "anchor",
    hints: [
      "People made it.",
      "Boats carry it.",
      "It is heavy and made of metal.",
      "It is dropped into the water.",
      "It keeps a boat from drifting.",
      "The shape often looks like a hook.",
    ],
  },
  {
    word: "balloon",
    hints: [
      "People use it at parties.",
      "It is light enough to float.",
      "Air or gas fills it.",
      "It is often brightly colored.",
      "A string hangs from the bottom.",
      "A pin can pop it.",
    ],
  },
  {
    word: "crayon",
    hints: [
      "Kids use it.",
      "It is made for drawing.",
      "A box holds many colors.",
      "Colored wax is what it is made of.",
      "You hold it the way you hold a pencil.",
      "It leaves waxy marks on paper.",
    ],
  },
  {
    word: "dolphin",
    hints: [
      "It is an animal.",
      "It lives in the ocean.",
      "It is a mammal, not a fish.",
      "It is smart and playful.",
      "It leaps out of the water.",
      "A blowhole sits on top of its head.",
    ],
  },
  {
    word: "eclipse",
    hints: [
      "You can see it in the sky.",
      "It does not happen every day.",
      "The sun and moon are involved.",
      "One passes in front of the other.",
      "Daylight can suddenly grow dim.",
      "Special glasses are worn to watch.",
    ],
  },
  {
    word: "feather",
    hints: [
      "It comes from an animal.",
      "Birds grow it.",
      "It is very light.",
      "It helps a bird fly.",
      "It can be soft or stiff.",
      "Old pens were made from a stiff one.",
    ],
  },
  {
    word: "giraffe",
    hints: [
      "It is an animal.",
      "It lives in Africa.",
      "Spots cover its coat.",
      "It eats leaves from tall trees.",
      "Its neck is extremely long.",
      "It is the tallest animal on land.",
    ],
  },
  {
    word: "honey",
    hints: [
      "You can eat it.",
      "It is thick and sweet.",
      "Bees make it.",
      "It is golden and sticky.",
      "A hive is where it is stored.",
      "People drizzle it on toast.",
    ],
  },
  {
    word: "jaguar",
    hints: [
      "It is an animal.",
      "It is a big cat.",
      "It lives where plants grow thick.",
      "Spots cover its coat.",
      "It swims well.",
      "It prefers to hunt at night.",
    ],
  },
  {
    word: "kettle",
    hints: [
      "It is found in a kitchen.",
      "You heat water in it.",
      "It sits on a stove or plugs in.",
      "A spout sticks out from the side.",
      "It sings when the water boils.",
      "Tea usually starts with it.",
    ],
  },
  {
    word: "lantern",
    hints: [
      "People carry it.",
      "It gives off light.",
      "Campers hang it at night.",
      "A handle sits on top.",
      "A flame or bulb glows inside.",
      "It lights a path in the dark.",
    ],
  },
  {
    word: "magnet",
    hints: [
      "You can hold it in your hand.",
      "Metal sticks to it.",
      "It has two opposite poles.",
      "Two of them can push apart.",
      "Notes stay on a fridge because of it.",
      "Iron is pulled toward it.",
    ],
  },
  {
    word: "noodle",
    hints: [
      "You can eat it.",
      "It is a kind of food.",
      "It is long and skinny.",
      "Cooking makes it soft.",
      "Soup and pasta both use it.",
      "People slurp it from a bowl.",
    ],
  },
  {
    word: "oyster",
    hints: [
      "It is an animal.",
      "It lives in the ocean.",
      "A rough shell protects it.",
      "It stays stuck in one place.",
      "Some people eat it raw.",
      "A pearl can grow inside.",
    ],
  },
  {
    word: "pencil",
    hints: [
      "Students use it.",
      "It is used for writing.",
      "Wood surrounds the center.",
      "The tip can be sharpened.",
      "An eraser sits on one end.",
      "It leaves gray marks on paper.",
    ],
  },
  {
    word: "quilt",
    hints: [
      "It belongs on a bed.",
      "It keeps you warm at night.",
      "Soft cloth is what it is made of.",
      "Stitches hold the layers together.",
      "Colorful patches may cover it.",
      "Someone may sew it by hand.",
    ],
  },
  {
    word: "raccoon",
    hints: [
      "It is an animal.",
      "It comes out at night.",
      "A dark mask marks its face.",
      "Rings circle its tail.",
      "Its front paws are clever.",
      "It is known for raiding trash cans.",
    ],
  },
  {
    word: "shovel",
    hints: [
      "It is a tool.",
      "You grip it with both hands.",
      "It is used for digging.",
      "A long handle meets a broad blade.",
      "Gardeners and builders both use it.",
      "Dirt, sand, or snow can be scooped.",
    ],
  },
  {
    word: "trumpet",
    hints: [
      "People made it.",
      "It makes music.",
      "Brass is what it is made of.",
      "You buzz your lips into it.",
      "Three buttons change the notes.",
      "It can play a loud fanfare.",
    ],
  },
  {
    word: "unicorn",
    hints: [
      "It appears in stories.",
      "It looks a lot like a horse.",
      "It is gentle and magical.",
      "One horn grows from its forehead.",
      "Pictures usually show it as white.",
      "Forests and rainbows surround it.",
    ],
  },
  {
    word: "waffle",
    hints: [
      "You can eat it.",
      "It is a breakfast food.",
      "A special iron cooks it.",
      "Deep squares cover the surface.",
      "Syrup pools in those squares.",
      "Fruit or butter goes on top.",
    ],
  },
  {
    word: "xylophone",
    hints: [
      "People made it.",
      "It is a musical instrument.",
      "Bars of different sizes sit in a row.",
      "You strike the bars to play.",
      "Each bar has its own note.",
      "A mallet is held in each hand.",
    ],
  },
  {
    word: "yogurt",
    hints: [
      "You can eat it.",
      "It is smooth and creamy.",
      "It is kept in the cold.",
      "Milk is used to make it.",
      "It can be plain or flavored.",
      "A spoon is the usual way to eat it.",
    ],
  },
  {
    word: "zebra",
    hints: [
      "It is an animal.",
      "It lives in Africa.",
      "It looks a bit like a horse.",
      "Black and white stripes cover it.",
      "No two share the same pattern.",
      "Herds of them graze on grassland.",
    ],
  },
  {
    word: "acorn",
    hints: [
      "It grows on a tree.",
      "It is a kind of seed.",
      "An oak tree drops it.",
      "Squirrels love to collect it.",
      "A little cap covers one end.",
      "A new tree can sprout from it.",
    ],
  },
  {
    word: "bridge",
    hints: [
      "People built it.",
      "It lets you reach the other side.",
      "Cars or people travel across it.",
      "A river may flow underneath.",
      "Steel or stone can hold it up.",
      "Cables and towers may support it.",
    ],
  },
  {
    word: "candle",
    hints: [
      "People light it.",
      "It gives a small warm glow.",
      "Wax is what it is made of.",
      "A wick runs through the center.",
      "A flame sits on the top.",
      "Birthdays often use more than one.",
    ],
  },
  {
    word: "desert",
    hints: [
      "It is a kind of place.",
      "Very little rain falls there.",
      "Sand or rock covers the ground.",
      "The days are usually hot.",
      "Water and plants are scarce.",
      "Camels are used to cross it.",
    ],
  },
  {
    word: "engine",
    hints: [
      "People built it.",
      "It is a machine.",
      "It creates power.",
      "Cars and trains need one.",
      "Fuel is what makes it run.",
      "It turns energy into motion.",
    ],
  },
  {
    word: "forest",
    hints: [
      "It is a kind of place.",
      "Many trees grow close together.",
      "Animals live among the trunks.",
      "The ground stays mostly shady.",
      "Trails may wind through it.",
      "It is much bigger than a grove.",
    ],
  },
  {
    word: "glacier",
    hints: [
      "It is found in nature.",
      "It is made of ice.",
      "It is huge and very heavy.",
      "It creeps downhill very slowly.",
      "Falling snow keeps feeding it.",
      "It can carve out a valley.",
    ],
  },
  {
    word: "hammer",
    hints: [
      "It is a tool.",
      "You swing it with one hand.",
      "Builders keep it in a toolbox.",
      "A metal head sits on a handle.",
      "Nails get driven in by it.",
      "A claw on the back pulls them out.",
    ],
  },
  {
    word: "insect",
    hints: [
      "It is an animal.",
      "It is very small.",
      "Six legs are attached to it.",
      "Its body has three sections.",
      "Some kinds have wings.",
      "Ants, bees, and beetles are kinds.",
    ],
  },
  {
    word: "jungle",
    hints: [
      "It is a kind of place.",
      "The air is hot and wet.",
      "Plants grow thick and tall.",
      "Rain falls there often.",
      "Monkeys may live in the trees.",
      "Vines hang down from the branches.",
    ],
  },
  {
    word: "kitten",
    hints: [
      "It is an animal.",
      "It is still a baby.",
      "It is soft and furry.",
      "The sound it makes is meow.",
      "It grows up to be a cat.",
      "String and naps are favorite things.",
    ],
  },
  {
    word: "ladder",
    hints: [
      "People use it.",
      "It helps you reach high places.",
      "You climb one step at a time.",
      "Two long sides run its length.",
      "Rungs connect those sides.",
      "It leans against a wall.",
    ],
  },
  {
    word: "muffin",
    hints: [
      "You can eat it.",
      "It is small and baked.",
      "Breakfast or a snack can be one.",
      "Batter rises inside a round cup.",
      "A paper liner often holds it.",
      "Blueberry is a popular kind.",
    ],
  },
  {
    word: "needle",
    hints: [
      "People use it while sewing.",
      "It is thin and very sharp.",
      "One end has a tiny hole.",
      "Thread passes through that hole.",
      "It pulls thread through cloth.",
      "Stepping on it would hurt.",
    ],
  },
  {
    word: "orange",
    hints: [
      "You can eat it.",
      "It is a fruit.",
      "It grows on a tree.",
      "You peel it before eating.",
      "The inside splits into slices.",
      "It shares its name with a color.",
    ],
  },
  {
    word: "parrot",
    hints: [
      "It is an animal.",
      "It is a bird.",
      "It lives where the weather is warm.",
      "Its feathers are bright colors.",
      "A curved beak can crack nuts.",
      "It can copy words people say.",
    ],
  },
  {
    word: "pebble",
    hints: [
      "You find it outside.",
      "It is a tiny stone.",
      "It fits easily in one hand.",
      "Water may have worn it smooth.",
      "Beaches are covered with them.",
      "A flat one can be skipped on a lake.",
    ],
  },
  {
    word: "pumpkin",
    hints: [
      "You can eat it.",
      "It grows on a vine.",
      "It is large, round, and orange.",
      "People carve faces into it.",
      "Autumn is its season.",
      "Pies are filled with the inside.",
    ],
  },
  {
    word: "rabbit",
    hints: [
      "It is an animal.",
      "Its ears are long.",
      "It gets around by hopping.",
      "A fluffy tail sits in the back.",
      "Carrots and clover are favorites.",
      "A burrow underground is its home.",
    ],
  },
  {
    word: "saddle",
    hints: [
      "People use it.",
      "Leather is a common material.",
      "It rests on a horse's back.",
      "A rider sits on top of it.",
      "Stirrups hang down on both sides.",
      "A strap buckles it in place.",
    ],
  },
  {
    word: "teapot",
    hints: [
      "It is found in a kitchen.",
      "A hot drink waits inside.",
      "Tea leaves steep in it.",
      "A spout pours from one side.",
      "A handle is on the other side.",
      "A lid helps keep the heat in.",
    ],
  },
  {
    word: "tractor",
    hints: [
      "People built it.",
      "Farms are where it is used.",
      "The wheels are big and rugged.",
      "It drives slowly through fields.",
      "Plows get pulled behind it.",
      "A farmer sits up in the cab.",
    ],
  },
  {
    word: "ukulele",
    hints: [
      "People made it.",
      "It is used for music.",
      "It is small enough to hold easily.",
      "Four strings run along the body.",
      "Fingers strum those strings.",
      "It is especially popular in Hawaii.",
    ],
  },
  {
    word: "vampire",
    hints: [
      "It appears in scary stories.",
      "It is not a real creature.",
      "It comes out at night.",
      "Sharp fangs fill its mouth.",
      "A cape is part of the look.",
      "Stories say sunlight is dangerous.",
    ],
  },
  {
    word: "wagon",
    hints: [
      "People use it.",
      "Four wheels let it roll.",
      "You can pull it behind you.",
      "Kids often ride in the back.",
      "Red is a common color for it.",
      "Pioneers traveled in a covered one.",
    ],
  },
  {
    word: "whistle",
    hints: [
      "People use it.",
      "It makes a sharp sound.",
      "You blow air through it.",
      "Coaches and referees carry one.",
      "A tiny pea may rattle inside.",
      "One blast can stop a game.",
    ],
  },
  {
    word: "yarn",
    hints: [
      "People use it for crafts.",
      "It is soft and stringy.",
      "It is wound into a ball.",
      "Knitting loops it into fabric.",
      "A sweater can be made from it.",
      "A cat likes to bat it around.",
    ],
  },
  {
    word: "zipper",
    hints: [
      "It is part of clothing.",
      "It opens and closes a seam.",
      "Little teeth lock together.",
      "A small tab slides along them.",
      "Jackets often have one in front.",
      "A stuck one is annoying to fix.",
    ],
  },
  {
    word: "apricot",
    hints: [
      "You can eat it.",
      "It is a fruit.",
      "It grows on a tree.",
      "The skin is smooth and orange.",
      "A hard pit sits in the center.",
      "The taste is a little like a peach.",
    ],
  },
  {
    word: "blizzard",
    hints: [
      "It is a kind of weather.",
      "It happens in winter.",
      "Strong wind comes with it.",
      "Snow falls hard the whole time.",
      "Seeing through it is difficult.",
      "Roads may close until it passes.",
    ],
  },
  {
    word: "airplane",
    hints: [
      "People built it.",
      "It travels through the sky.",
      "Many passengers can ride inside.",
      "Wings stick out from both sides.",
      "It needs a long runway to leave the ground.",
      "A pilot sits up in the cockpit.",
    ],
  },
  {
    word: "alligator",
    hints: [
      "It is an animal.",
      "It lives in warm swamps.",
      "It is a large reptile.",
      "Tough scales cover its body.",
      "A long snout is full of teeth.",
      "It looks a lot like a crocodile.",
    ],
  },
  {
    word: "apple",
    hints: [
      "You can eat it.",
      "It is a fruit.",
      "It grows on a tree.",
      "The skin can be red or green.",
      "A core and seeds sit in the middle.",
      "Teachers and pies both use it.",
    ],
  },
  {
    word: "aquarium",
    hints: [
      "People built it.",
      "It is a glass tank.",
      "Water fills it up.",
      "Fish swim around inside.",
      "You might see one at a zoo.",
      "A filter keeps the water clean.",
    ],
  },
  {
    word: "badger",
    hints: [
      "It is an animal.",
      "It lives underground.",
      "Black and white stripes mark its face.",
      "It has strong claws for digging.",
      "It comes out mostly at night.",
      "It is stocky, fierce, and low to the ground.",
    ],
  },
  {
    word: "bagel",
    hints: [
      "You can eat it.",
      "It is a bread.",
      "The shape is a ring.",
      "The dough is boiled, then baked.",
      "A hole goes through the center.",
      "Cream cheese is a common topping.",
    ],
  },
  {
    word: "basketball",
    hints: [
      "People play with it.",
      "It is a sport.",
      "You bounce it on a court.",
      "Points are scored through a hoop.",
      "Five players are on each team.",
      "Dribbling is part of moving it.",
    ],
  },
  {
    word: "bathtub",
    hints: [
      "It is in a bathroom.",
      "You sit down inside it.",
      "It holds warm water.",
      "A drain waits at the bottom.",
      "Soap and bubbles often fill it.",
      "A shower may hang above it.",
    ],
  },
  {
    word: "beach",
    hints: [
      "It is a kind of place.",
      "Sand covers the ground.",
      "Waves wash up beside it.",
      "People swim and build castles there.",
      "Shells and towels are common sights.",
      "Summer trips often head there.",
    ],
  },
  {
    word: "beaver",
    hints: [
      "It is an animal.",
      "It lives near rivers.",
      "Large teeth help it cut wood.",
      "A flat tail slaps the water.",
      "It builds dams out of sticks.",
      "Its home is called a lodge.",
    ],
  },
  {
    word: "biscuit",
    hints: [
      "You can eat it.",
      "It is a small bread.",
      "It is baked until fluffy.",
      "Butter often melts on top.",
      "Breakfast plates include it.",
      "Gravy is sometimes poured over it.",
    ],
  },
  {
    word: "blanket",
    hints: [
      "It belongs on a bed.",
      "It keeps you warm.",
      "Soft fabric is what it is made of.",
      "You pull it up to your chin.",
      "Winter nights call for a thick one.",
      "Some are fuzzy and others are woven.",
    ],
  },
  {
    word: "bookshelf",
    hints: [
      "People built it.",
      "It stands against a wall.",
      "Flat boards are stacked in it.",
      "Stories and textbooks sit on it.",
      "A library has many of them.",
      "Dust gathers if it is not used.",
    ],
  },
  {
    word: "bottle",
    hints: [
      "People use it.",
      "It holds a liquid.",
      "Glass or plastic forms the body.",
      "A narrow neck leads to the top.",
      "A cap keeps it from spilling.",
      "Water, milk, or soda may be inside.",
    ],
  },
  {
    word: "broccoli",
    hints: [
      "You can eat it.",
      "It is a vegetable.",
      "It is green and tree-shaped.",
      "Little florets bunch at the top.",
      "It is often steamed or roasted.",
      "Kids sometimes hide it at dinner.",
    ],
  },
  {
    word: "broom",
    hints: [
      "It is a tool.",
      "It is used for cleaning.",
      "A long handle leads the way.",
      "Stiff bristles sweep the floor.",
      "Dust is pushed into a pile.",
      "A dustpan is its usual partner.",
    ],
  },
  {
    word: "buffalo",
    hints: [
      "It is an animal.",
      "It is huge and heavy.",
      "A shaggy coat covers it.",
      "Curved horns grow from its head.",
      "Herds once filled the plains.",
      "It is also called a bison.",
    ],
  },
  {
    word: "burrito",
    hints: [
      "You can eat it.",
      "It is a full meal you can hold.",
      "A flour tortilla wraps it.",
      "Rice, beans, or meat go inside.",
      "The ends are folded closed.",
      "Salsa is a popular extra.",
    ],
  },
  {
    word: "butter",
    hints: [
      "You can eat it.",
      "It is soft and creamy.",
      "It is made from milk.",
      "It melts when it gets warm.",
      "Toast and pancakes get a smear.",
      "It is kept cold so it stays firm.",
    ],
  },
  {
    word: "button",
    hints: [
      "It is small and round.",
      "Clothes often have several.",
      "It slips through a little hole.",
      "It keeps a shirt closed.",
      "Sewing attaches it with thread.",
      "Losing one can be annoying.",
    ],
  },
  {
    word: "cabbage",
    hints: [
      "You can eat it.",
      "It is a vegetable.",
      "Leaves pack into a round head.",
      "It can be green or purple.",
      "Salads and soups both use it.",
      "It has a crisp, mild crunch.",
    ],
  },
  {
    word: "calculator",
    hints: [
      "People made it.",
      "It is a small tool.",
      "Numbers are typed into it.",
      "It solves math problems.",
      "A screen shows the answer.",
      "Students carry one to class.",
    ],
  },
  {
    word: "calendar",
    hints: [
      "People use it.",
      "It keeps track of days.",
      "Months are laid out in boxes.",
      "You can mark important dates.",
      "A new one starts each year.",
      "Hanging one on the wall is common.",
    ],
  },
  {
    word: "camel",
    hints: [
      "It is an animal.",
      "It lives in dry, hot places.",
      "A hump rises from its back.",
      "It can go a long time without water.",
      "People ride it across sand.",
      "Long lashes keep dust from its eyes.",
    ],
  },
  {
    word: "canoe",
    hints: [
      "People built it.",
      "It floats on water.",
      "It is long and narrow.",
      "Paddles move it along.",
      "One or two people sit inside.",
      "Lakes and quiet rivers suit it.",
    ],
  },
  {
    word: "canyon",
    hints: [
      "It is found in nature.",
      "It is a deep cut in the land.",
      "Steep walls rise on both sides.",
      "A river may run along the bottom.",
      "Layers of rock show on the sides.",
      "The Grand one is famous.",
    ],
  },
  {
    word: "caramel",
    hints: [
      "You can eat it.",
      "It is sweet and chewy.",
      "Sugar is cooked to make it.",
      "The color is golden brown.",
      "It can coat an apple on a stick.",
      "Candies and sauces use it.",
    ],
  },
  {
    word: "carpet",
    hints: [
      "It covers a floor.",
      "It feels soft under your feet.",
      "Wall-to-wall is one way to lay it.",
      "Vacuuming keeps it clean.",
      "Stairs sometimes wear a strip of it.",
      "A rug is a smaller cousin.",
    ],
  },
  {
    word: "carrot",
    hints: [
      "You can eat it.",
      "It is a vegetable.",
      "It grows underground.",
      "The part you eat is orange.",
      "Rabbits are known to like it.",
      "The leafy top sticks out of the soil.",
    ],
  },
  {
    word: "cereal",
    hints: [
      "You can eat it.",
      "It is a breakfast food.",
      "It comes in a box.",
      "Milk is poured over it.",
      "A spoon is the usual tool.",
      "Some kinds crackle in the bowl.",
    ],
  },
  {
    word: "chair",
    hints: [
      "People use it.",
      "It is a piece of furniture.",
      "You sit down on it.",
      "It usually has four legs.",
      "A back keeps you upright.",
      "Tables are often surrounded by them.",
    ],
  },
  {
    word: "cheese",
    hints: [
      "You can eat it.",
      "It is made from milk.",
      "It can be soft or hard.",
      "Mice are joked about loving it.",
      "Pizza is covered with melted bits.",
      "A slice may go on a sandwich.",
    ],
  },
  {
    word: "cheetah",
    hints: [
      "It is an animal.",
      "It is a big cat.",
      "Spots cover its coat.",
      "It lives on open grassland.",
      "It hunts by chasing its prey.",
      "It is the fastest animal on land.",
    ],
  },
  {
    word: "cherry",
    hints: [
      "You can eat it.",
      "It is a small fruit.",
      "It grows on a tree.",
      "A long stem sticks out of the top.",
      "Red is the usual color.",
      "A pit hides inside.",
    ],
  },
  {
    word: "chicken",
    hints: [
      "It is an animal.",
      "It is a kind of bird.",
      "It is raised on farms.",
      "It clucks and pecks the ground.",
      "Eggs come from the females.",
      "People also cook and eat it.",
    ],
  },
  {
    word: "chimney",
    hints: [
      "It is part of a building.",
      "Smoke travels up through it.",
      "It rises above the roof.",
      "Bricks are a common material.",
      "Santa is said to climb down one.",
      "A fireplace connects to the bottom.",
    ],
  },
  {
    word: "chocolate",
    hints: [
      "You can eat it.",
      "It is a sweet treat.",
      "Cacao beans are used to make it.",
      "It can be dark or milky.",
      "Candy bars are often made of it.",
      "It melts if it gets too warm.",
    ],
  },
  {
    word: "cloud",
    hints: [
      "You can see it in the sky.",
      "It is made of tiny water drops.",
      "It can look fluffy and white.",
      "Rain may fall from a dark one.",
      "Wind pushes it along.",
      "A storm can pile them high.",
    ],
  },
  {
    word: "coconut",
    hints: [
      "You can eat it.",
      "It is a large fruit.",
      "A hard hairy shell surrounds it.",
      "It grows on a tall palm.",
      "Sweet white flesh is inside.",
      "Milk can be drained from the middle.",
    ],
  },
  {
    word: "coin",
    hints: [
      "People use it.",
      "It is a kind of money.",
      "Metal is what it is made of.",
      "It is small, flat, and round.",
      "A picture is stamped on each side.",
      "Pockets jingle when they hold some.",
    ],
  },
  {
    word: "cookie",
    hints: [
      "You can eat it.",
      "It is a sweet baked treat.",
      "Dough is scooped into rounds.",
      "An oven browns the outside.",
      "Chocolate chips are a favorite mix-in.",
      "A glass of milk goes well with one.",
    ],
  },
  {
    word: "couch",
    hints: [
      "It is a piece of furniture.",
      "More than one person can sit on it.",
      "Soft cushions cover it.",
      "Living rooms usually have one.",
      "People stretch out for a nap.",
      "It is also called a sofa.",
    ],
  },
  {
    word: "crab",
    hints: [
      "It is an animal.",
      "It lives in the ocean.",
      "A hard shell protects it.",
      "Two big claws pinch.",
      "It walks sideways.",
      "People sometimes boil and eat it.",
    ],
  },
  {
    word: "crocodile",
    hints: [
      "It is an animal.",
      "It is a large reptile.",
      "It lurks in rivers.",
      "Powerful jaws snap shut.",
      "Eyes sit on top of its head.",
      "It looks similar to an alligator.",
    ],
  },
  {
    word: "cucumber",
    hints: [
      "You can eat it.",
      "It is a vegetable.",
      "It is long and green.",
      "The inside is cool and watery.",
      "Salads often include slices.",
      "Pickles can be made from it.",
    ],
  },
  {
    word: "cupcake",
    hints: [
      "You can eat it.",
      "It is a small cake.",
      "It is baked in a paper liner.",
      "Frosting is swirled on top.",
      "Sprinkles may cover that frosting.",
      "Birthdays often have a tray of them.",
    ],
  },
  {
    word: "curtain",
    hints: [
      "It hangs in a window.",
      "Fabric is what it is made of.",
      "It can be pulled open or shut.",
      "It blocks light or gives privacy.",
      "A rod holds it up.",
      "Bedrooms and stages both use them.",
    ],
  },
  {
    word: "deer",
    hints: [
      "It is an animal.",
      "It lives in woods and fields.",
      "It is gentle and quick.",
      "Males may grow antlers.",
      "Spots cover a young one.",
      "It freezes when it senses danger.",
    ],
  },
  {
    word: "dice",
    hints: [
      "People use them in games.",
      "They are small cubes.",
      "Dots mark each face.",
      "You shake them in your hand.",
      "A roll decides a number.",
      "Board games often need a pair.",
    ],
  },
  {
    word: "dishwasher",
    hints: [
      "People built it.",
      "It is a kitchen machine.",
      "Dirty dishes go inside.",
      "Hot water and soap clean them.",
      "A cycle runs with the door shut.",
      "It hums until the load is done.",
    ],
  },
  {
    word: "doorbell",
    hints: [
      "It is part of a house.",
      "Guests use it when they arrive.",
      "You press it with a finger.",
      "A chime sounds inside.",
      "It is mounted by the front door.",
      "Some show a camera picture too.",
    ],
  },
  {
    word: "drum",
    hints: [
      "People made it.",
      "It is a musical instrument.",
      "You hit it to make sound.",
      "A tight skin covers the top.",
      "Sticks or hands can play it.",
      "A band keeps time with it.",
    ],
  },
  {
    word: "eagle",
    hints: [
      "It is an animal.",
      "It is a large bird.",
      "It soars high on wide wings.",
      "A hooked beak tears its food.",
      "Sharp eyes spot prey far below.",
      "A nest may sit on a cliff.",
    ],
  },
  {
    word: "elevator",
    hints: [
      "People built it.",
      "It moves between floors.",
      "You ride inside a small room.",
      "Buttons choose where to stop.",
      "Cables pull it up and down.",
      "Tall buildings depend on one.",
    ],
  },
  {
    word: "envelope",
    hints: [
      "People use it for mail.",
      "It is made of folded paper.",
      "A letter slides inside.",
      "You seal the flap shut.",
      "An address is written on the front.",
      "A stamp goes in the corner.",
    ],
  },
  {
    word: "eraser",
    hints: [
      "Students use it.",
      "It fixes a writing mistake.",
      "It rubs marks off the page.",
      "Pink rubber is a common kind.",
      "Shavings curl up as it works.",
      "One often caps a pencil.",
    ],
  },
  {
    word: "faucet",
    hints: [
      "It is found at a sink.",
      "Water comes out of it.",
      "You turn a handle to start it.",
      "Hot and cold can be mixed.",
      "A stream pours into the basin.",
      "Drips mean it needs a fix.",
    ],
  },
  {
    word: "fence",
    hints: [
      "People built it.",
      "It marks the edge of a yard.",
      "Posts hold it upright.",
      "It can be wood, wire, or metal.",
      "Gates let you pass through.",
      "It keeps pets in and strangers out.",
    ],
  },
  {
    word: "fireplace",
    hints: [
      "It is part of a house.",
      "A fire burns inside it.",
      "Logs or gas provide the flame.",
      "Warmth spreads into the room.",
      "A screen keeps sparks contained.",
      "A mantel often sits above it.",
    ],
  },
  {
    word: "flamingo",
    hints: [
      "It is an animal.",
      "It is a tall bird.",
      "It stands in shallow water.",
      "Pink feathers cover its body.",
      "It balances on one leg.",
      "A curved beak strains food from mud.",
    ],
  },
  {
    word: "flashlight",
    hints: [
      "People carry it.",
      "It makes a beam of light.",
      "Batteries power it.",
      "You switch it on in the dark.",
      "Campers keep one in a pack.",
      "A bright circle shines ahead.",
    ],
  },
  {
    word: "fork",
    hints: [
      "It is a utensil.",
      "You eat with it.",
      "Points stick out at one end.",
      "It picks up solid food.",
      "It sits beside a plate.",
      "A knife and spoon join it.",
    ],
  },
  {
    word: "fountain",
    hints: [
      "People built it.",
      "Water shoots up from it.",
      "Parks and plazas often have one.",
      "Coins are sometimes tossed in.",
      "The water falls back down.",
      "It can splash on a windy day.",
    ],
  },
  {
    word: "fox",
    hints: [
      "It is an animal.",
      "It is a wild canine.",
      "A bushy tail trails behind.",
      "Red fur is the usual color.",
      "It is clever and quick.",
      "It hunts mostly at night.",
    ],
  },
  {
    word: "fridge",
    hints: [
      "It is a kitchen machine.",
      "It keeps food cold.",
      "A door opens to shelves.",
      "A light flicks on inside.",
      "Ice may be made in the freezer.",
      "Milk and leftovers live there.",
    ],
  },
  {
    word: "frog",
    hints: [
      "It is an animal.",
      "It starts life as a tadpole.",
      "It can live on land and in water.",
      "Strong legs make it jump.",
      "Smooth skin covers its body.",
      "A deep croak is its call.",
    ],
  },
  {
    word: "garlic",
    hints: [
      "You can eat it.",
      "It is used for flavor.",
      "A papery skin wraps the cloves.",
      "It grows underground in a bulb.",
      "Cooking makes the smell strong.",
      "Italian food uses it often.",
    ],
  },
  {
    word: "glove",
    hints: [
      "People wear it.",
      "It covers a hand.",
      "Each finger gets its own pocket.",
      "Winter calls for a warm pair.",
      "Baseball players catch with one.",
      "The other hand may wear a match.",
    ],
  },
  {
    word: "goldfish",
    hints: [
      "It is an animal.",
      "It is a small pet.",
      "It lives in water.",
      "A bowl or tank is its home.",
      "Its color is usually bright orange.",
      "It swims in slow circles.",
    ],
  },
  {
    word: "gorilla",
    hints: [
      "It is an animal.",
      "It is a great ape.",
      "It is very strong.",
      "Black fur covers its body.",
      "It lives in African forests.",
      "It walks on its knuckles.",
    ],
  },
  {
    word: "grape",
    hints: [
      "You can eat it.",
      "It is a small fruit.",
      "It grows in bunches on a vine.",
      "Green or purple are common colors.",
      "Juice and jelly are made from it.",
      "Raisins are the dried kind.",
    ],
  },
  {
    word: "hail",
    hints: [
      "It is a kind of weather.",
      "It falls from storm clouds.",
      "Ice lumps hit the ground.",
      "It can dent cars and roofs.",
      "It bounces when it lands.",
      "Summer storms sometimes bring it.",
    ],
  },
  {
    word: "hamburger",
    hints: [
      "You can eat it.",
      "It is a hot sandwich.",
      "A cooked beef patty is the star.",
      "A round bun holds it together.",
      "Cheese, lettuce, and sauce may join.",
      "Fast food places sell stacks of them.",
    ],
  },
  {
    word: "hammock",
    hints: [
      "People rest in it.",
      "Fabric or rope forms the bed.",
      "It hangs between two supports.",
      "You lie back and swing gently.",
      "Trees or posts hold the ends.",
      "Summer yards often have one.",
    ],
  },
  {
    word: "harmonica",
    hints: [
      "People made it.",
      "It is a small instrument.",
      "It fits in one hand.",
      "You blow and draw air through it.",
      "Metal reeds make the notes.",
      "Folk and blues players use it.",
    ],
  },
  {
    word: "hawk",
    hints: [
      "It is an animal.",
      "It is a bird of prey.",
      "It circles high in the sky.",
      "Sharp talons grab its food.",
      "A hooked beak tears meat.",
      "Farmers see it hunting over fields.",
    ],
  },
  {
    word: "hedgehog",
    hints: [
      "It is an animal.",
      "It is small and round.",
      "Sharp spines cover its back.",
      "It rolls into a ball when scared.",
      "It comes out at night.",
      "Gardens in Europe often host one.",
    ],
  },
  {
    word: "helmet",
    hints: [
      "People wear it.",
      "It protects the head.",
      "A hard shell takes the hit.",
      "A strap buckles under the chin.",
      "Bikes and sports call for one.",
      "Some have a face guard.",
    ],
  },
  {
    word: "hippo",
    hints: [
      "It is an animal.",
      "It is enormous and heavy.",
      "It spends much of the day in water.",
      "Its mouth can open very wide.",
      "It lives in African rivers.",
      "Despite the size, it can run fast.",
    ],
  },
  {
    word: "horse",
    hints: [
      "It is an animal.",
      "People can ride on its back.",
      "A mane runs along its neck.",
      "It gallops on four strong legs.",
      "Hay and grass are its food.",
      "A saddle and bridle help the rider.",
    ],
  },
  {
    word: "hose",
    hints: [
      "People use it outside.",
      "Water flows through it.",
      "It is a long flexible tube.",
      "Gardens get a drink from it.",
      "You can coil it when finished.",
      "A nozzle controls the spray.",
    ],
  },
  {
    word: "hourglass",
    hints: [
      "People made it.",
      "It measures time.",
      "Sand trickles from top to bottom.",
      "Glass bulbs are joined at a neck.",
      "Flipping it starts the count again.",
      "A game may use one as a timer.",
    ],
  },
  {
    word: "hummingbird",
    hints: [
      "It is an animal.",
      "It is a tiny bird.",
      "Its wings beat too fast to see.",
      "It can hover in one place.",
      "A long beak sips from flowers.",
      "Jewel colors flash on its throat.",
    ],
  },
  {
    word: "hurricane",
    hints: [
      "It is a kind of weather.",
      "It is a huge spinning storm.",
      "It forms over warm ocean water.",
      "Powerful wind circles the center.",
      "Heavy rain comes with it.",
      "Coastal towns prepare and evacuate.",
    ],
  },
  {
    word: "jacket",
    hints: [
      "People wear it.",
      "It is a piece of clothing.",
      "It covers the arms and torso.",
      "A zipper or buttons close the front.",
      "Cool weather calls for one.",
      "Pockets may hide your hands.",
    ],
  },
  {
    word: "joystick",
    hints: [
      "People use it to play.",
      "It is a game controller.",
      "A stick tilts in every direction.",
      "A base sits on the desk or panel.",
      "Buttons may be on the top.",
      "Pilots and arcade games both use one.",
    ],
  },
  {
    word: "ketchup",
    hints: [
      "You can eat it.",
      "It is a red sauce.",
      "Tomatoes are the main ingredient.",
      "A bottle is squeezed to pour it.",
      "Fries and burgers get a squirt.",
      "It is sweet, tangy, and thick.",
    ],
  },
  {
    word: "keyboard",
    hints: [
      "People use it with a computer.",
      "Rows of buttons cover it.",
      "Each button types a letter.",
      "Your fingers rest on the home row.",
      "Music can also be played on one.",
      "The space bar is the longest button.",
    ],
  },
  {
    word: "kite",
    hints: [
      "People fly it.",
      "Wind lifts it into the sky.",
      "A long string stays in your hand.",
      "A tail may flutter behind.",
      "Parks and beaches are good spots.",
      "A tug means it wants to dive.",
    ],
  },
  {
    word: "knife",
    hints: [
      "It is a utensil.",
      "It has a handle and a blade.",
      "The edge is sharp.",
      "It cuts food on a plate.",
      "A fork is its usual partner.",
      "The point faces away when set down.",
    ],
  },
  {
    word: "koala",
    hints: [
      "It is an animal.",
      "It lives in Australia.",
      "It spends most of its time in trees.",
      "Gray fur looks soft and thick.",
      "Eucalyptus leaves are its food.",
      "A baby rides on its back.",
    ],
  },
  {
    word: "ladybug",
    hints: [
      "It is an animal.",
      "It is a tiny beetle.",
      "A round shell covers its back.",
      "Red with black spots is common.",
      "It is helpful in a garden.",
      "It can fly when the shell opens.",
    ],
  },
  {
    word: "lake",
    hints: [
      "It is found in nature.",
      "It is a body of water.",
      "Land surrounds it on all sides.",
      "It is bigger than a pond.",
      "People swim, fish, and boat there.",
      "A river may flow in or out.",
    ],
  },
  {
    word: "lamp",
    hints: [
      "People use it indoors.",
      "It gives off light.",
      "A shade covers the bulb.",
      "You switch it on at night.",
      "A table or floor stand holds it.",
      "Reading is easier beside one.",
    ],
  },
  {
    word: "lemon",
    hints: [
      "You can eat it.",
      "It is a citrus fruit.",
      "The outside is bright yellow.",
      "The juice is very sour.",
      "Pies and dressings use the juice.",
      "A slice may float in a drink.",
    ],
  },
  {
    word: "leopard",
    hints: [
      "It is an animal.",
      "It is a big cat.",
      "Spots cluster in rings on its coat.",
      "It climbs trees to rest.",
      "It hunts with a quiet stalk.",
      "Africa and Asia are its homes.",
    ],
  },
  {
    word: "lettuce",
    hints: [
      "You can eat it.",
      "It is a leafy vegetable.",
      "Salads start with a pile of it.",
      "The leaves can be crisp or soft.",
      "Sandwiches get a layer too.",
      "It grows in a loose or tight head.",
    ],
  },
  {
    word: "lightning",
    hints: [
      "It is a kind of weather.",
      "It happens during a storm.",
      "A bright flash splits the sky.",
      "Thunder follows the flash.",
      "It is a giant electric spark.",
      "Tall trees and poles can be hit.",
    ],
  },
  {
    word: "lion",
    hints: [
      "It is an animal.",
      "It is a big cat.",
      "Males grow a thick mane.",
      "A loud roar carries far.",
      "Groups of them are called prides.",
      "It is nicknamed king of the beasts.",
    ],
  },
  {
    word: "lizard",
    hints: [
      "It is an animal.",
      "It is a small reptile.",
      "Scales cover its body.",
      "Many can drop their tail.",
      "It warms itself in the sun.",
      "A gecko is one kind.",
    ],
  },
  {
    word: "lobster",
    hints: [
      "It is an animal.",
      "It lives in the ocean.",
      "A hard shell covers it.",
      "One claw may be larger.",
      "People boil it for dinner.",
      "The shell turns red when cooked.",
    ],
  },
  {
    word: "mailbox",
    hints: [
      "It stands near a house.",
      "Letters and packages go inside.",
      "A door or slot lets them in.",
      "A raised flag can signal mail.",
      "The carrier stops beside it.",
      "Rain stays out if the door is shut.",
    ],
  },
  {
    word: "mango",
    hints: [
      "You can eat it.",
      "It is a tropical fruit.",
      "The flesh is sweet and orange.",
      "A large flat pit is inside.",
      "You may need to peel it first.",
      "Smoothies and salsa both use it.",
    ],
  },
  {
    word: "meadow",
    hints: [
      "It is a kind of place.",
      "Grass covers the open ground.",
      "Wildflowers dot it in summer.",
      "Fewer trees stand here than in a forest.",
      "Deer and bees may visit.",
      "A path may wander across it.",
    ],
  },
  {
    word: "microscope",
    hints: [
      "People made it.",
      "It is a science tool.",
      "Tiny things look huge through it.",
      "You look down into the eyepiece.",
      "Slides sit on the stage.",
      "Labs and classrooms keep one.",
    ],
  },
  {
    word: "microwave",
    hints: [
      "It is a kitchen machine.",
      "It heats food quickly.",
      "A door closes before it runs.",
      "Waves cook from the inside.",
      "A beep says the time is up.",
      "Leftovers get a second life in it.",
    ],
  },
  {
    word: "monkey",
    hints: [
      "It is an animal.",
      "It is a primate.",
      "It swings through trees.",
      "A long tail helps it balance.",
      "Bananas are a favorite snack.",
      "It is curious and playful.",
    ],
  },
  {
    word: "moose",
    hints: [
      "It is an animal.",
      "It is the largest kind of deer.",
      "It lives in northern forests.",
      "Broad antlers grow on the males.",
      "Long legs wade through ponds.",
      "A flap of skin hangs under its throat.",
    ],
  },
  {
    word: "mosquito",
    hints: [
      "It is an animal.",
      "It is a tiny flying insect.",
      "It buzzes near your ear.",
      "Females bite for a meal of blood.",
      "An itchy bump is left behind.",
      "Ponds are where the young hatch.",
    ],
  },
  {
    word: "motorcycle",
    hints: [
      "People built it.",
      "It is a vehicle.",
      "Two wheels hold it up.",
      "An engine sits under the seat.",
      "You balance as you ride.",
      "A helmet is important on one.",
    ],
  },
  {
    word: "mouse",
    hints: [
      "It is an animal.",
      "It is very small.",
      "Soft fur covers its body.",
      "A thin tail trails behind.",
      "It squeaks and nibbles seeds.",
      "Cats are famous for chasing it.",
    ],
  },
  {
    word: "napkin",
    hints: [
      "It belongs at the table.",
      "Paper or cloth can make it.",
      "You wipe your hands and mouth.",
      "It sits beside the plate.",
      "Spills get dabbed with it.",
      "A lap is a common resting spot.",
    ],
  },
  {
    word: "notebook",
    hints: [
      "Students carry it.",
      "Blank pages fill it.",
      "You write notes inside.",
      "A cover protects the paper.",
      "Spiral wire may bind one edge.",
      "Homework often starts in one.",
    ],
  },
  {
    word: "oatmeal",
    hints: [
      "You can eat it.",
      "It is a warm breakfast.",
      "Oats are cooked to make it.",
      "Milk or water turns it soft.",
      "A bowl and spoon are the tools.",
      "Brown sugar or fruit goes on top.",
    ],
  },
  {
    word: "ocean",
    hints: [
      "It is found in nature.",
      "It is an enormous body of salt water.",
      "Waves move across it.",
      "Fish, whales, and ships travel it.",
      "Beaches mark where it meets land.",
      "It covers most of the planet.",
    ],
  },
  {
    word: "olive",
    hints: [
      "You can eat it.",
      "It is a small fruit.",
      "It grows on a tree.",
      "Green or black are the usual colors.",
      "A pit sits in the center.",
      "Oil is pressed from it.",
    ],
  },
  {
    word: "onion",
    hints: [
      "You can eat it.",
      "It is a vegetable.",
      "Layers pack inside a round bulb.",
      "It grows underground.",
      "Cutting it can make you cry.",
      "Soups and stir-fries use it often.",
    ],
  },
  {
    word: "ostrich",
    hints: [
      "It is an animal.",
      "It is a huge bird.",
      "It cannot fly.",
      "Long legs make it a fast runner.",
      "A long neck holds a small head.",
      "Its eggs are the largest of any bird.",
    ],
  },
  {
    word: "otter",
    hints: [
      "It is an animal.",
      "It lives in rivers or the sea.",
      "It is a playful swimmer.",
      "Thick fur keeps it warm.",
      "It floats on its back.",
      "Hands on its belly may crack shellfish.",
    ],
  },
  {
    word: "oven",
    hints: [
      "It is a kitchen machine.",
      "Food is baked inside.",
      "A door closes to trap heat.",
      "Cakes and roasts both use it.",
      "Racks slide in and out.",
      "A timer tells you when to check.",
    ],
  },
  {
    word: "owl",
    hints: [
      "It is an animal.",
      "It is a bird.",
      "It hunts mostly at night.",
      "A round face frames big eyes.",
      "It can turn its head very far.",
      "A hoot is its famous call.",
    ],
  },
  {
    word: "paintbrush",
    hints: [
      "Artists use it.",
      "A handle leads to soft bristles.",
      "Color is loaded on the tip.",
      "Strokes spread across paper or a wall.",
      "Water or thinner rinses it.",
      "A jar of them sits by the easel.",
    ],
  },
  {
    word: "pajamas",
    hints: [
      "People wear them.",
      "They are clothes for sleeping.",
      "A soft fabric makes them cozy.",
      "A top and bottoms are the set.",
      "You change into them at night.",
      "Patterns like stripes are common.",
    ],
  },
  {
    word: "pancake",
    hints: [
      "You can eat it.",
      "It is a breakfast food.",
      "Batter is poured on a hot griddle.",
      "It cooks into a flat round.",
      "You flip it when bubbles pop.",
      "Syrup is poured over a stack.",
    ],
  },
  {
    word: "panda",
    hints: [
      "It is an animal.",
      "It is a kind of bear.",
      "Black and white patches mark it.",
      "It lives in China.",
      "Bamboo is almost all it eats.",
      "It is gentle and rare.",
    ],
  },
  {
    word: "parachute",
    hints: [
      "People use it.",
      "It slows a fall from the sky.",
      "Fabric spreads into a wide canopy.",
      "Strings lead down to a harness.",
      "Skydivers trust one.",
      "A tug opens it after the jump.",
    ],
  },
  {
    word: "peacock",
    hints: [
      "It is an animal.",
      "It is a fancy bird.",
      "Males trail a huge train of feathers.",
      "Eye-shaped spots cover that train.",
      "The train can fan open.",
      "A loud cry carries across a yard.",
    ],
  },
  {
    word: "peanut",
    hints: [
      "You can eat it.",
      "It grows underground.",
      "A shell cracks open around it.",
      "The inside is oily and crunchy.",
      "Butter is ground from a jar of them.",
      "Ballparks sell bags at games.",
    ],
  },
  {
    word: "piano",
    hints: [
      "People made it.",
      "It is a large instrument.",
      "Black and white keys fill the front.",
      "Hammers hit strings inside.",
      "You sit on a bench to play.",
      "Concerts often feature one.",
    ],
  },
  {
    word: "pickle",
    hints: [
      "You can eat it.",
      "It starts as a cucumber.",
      "Brine makes it sour.",
      "It is crunchy and green.",
      "A spear or slice lands on a burger.",
      "Jars of them line deli shelves.",
    ],
  },
  {
    word: "pig",
    hints: [
      "It is an animal.",
      "It is raised on farms.",
      "A snout sniffs the ground.",
      "It oinks and loves mud.",
      "A curly tail sticks out behind.",
      "Bacon and ham come from it.",
    ],
  },
  {
    word: "pillow",
    hints: [
      "It belongs on a bed.",
      "You rest your head on it.",
      "It is soft and stuffed.",
      "A cloth cover slips over it.",
      "Fluffing it is a nightly habit.",
      "Couches have them too.",
    ],
  },
  {
    word: "pizza",
    hints: [
      "You can eat it.",
      "It is a round baked dish.",
      "A crust is the base.",
      "Tomato sauce and melted cheese cover it.",
      "Slices are cut like a pie.",
      "Toppings such as pepperoni are extra.",
    ],
  },
  {
    word: "planet",
    hints: [
      "It is found in space.",
      "It is a huge round world.",
      "It travels around a star.",
      "Earth is the one we live on.",
      "Some have rings or many moons.",
      "Telescopes help us see the far ones.",
    ],
  },
  {
    word: "pocket",
    hints: [
      "It is part of clothing.",
      "It is a small pouch sewn on.",
      "Hands, keys, or coins go inside.",
      "Pants and jackets often have one.",
      "A flap or zipper may close it.",
      "Checking it is how you find a lost item.",
    ],
  },
  {
    word: "pond",
    hints: [
      "It is found in nature.",
      "It is a small body of water.",
      "Land wraps all the way around.",
      "Frogs and ducks may live there.",
      "It is quieter than a lake.",
      "Lily pads can float on top.",
    ],
  },
  {
    word: "porcupine",
    hints: [
      "It is an animal.",
      "It is slow and round.",
      "Sharp quills cover its back.",
      "The quills defend it from enemies.",
      "It climbs trees to eat bark.",
      "A slap of the tail can leave spikes.",
    ],
  },
  {
    word: "pretzel",
    hints: [
      "You can eat it.",
      "It is a baked snack.",
      "The dough is twisted into a knot.",
      "Salt crystals sparkle on top.",
      "It can be soft or crunchy.",
      "Mustard is a common dip.",
    ],
  },
  {
    word: "puppy",
    hints: [
      "It is an animal.",
      "It is still a baby.",
      "It is furry and playful.",
      "It grows up to be a dog.",
      "It nips, naps, and chews shoes.",
      "A wagging tail shows it is happy.",
    ],
  },
  {
    word: "radio",
    hints: [
      "People made it.",
      "It plays sound from far away.",
      "You tune it to a station.",
      "Music and news come through a speaker.",
      "A dial or buttons change the channel.",
      "Cars and kitchens both keep one.",
    ],
  },
  {
    word: "rake",
    hints: [
      "It is a garden tool.",
      "A long handle leads to teeth.",
      "It gathers leaves into a pile.",
      "It also smooths soil.",
      "You pull it toward yourself.",
      "Autumn yards need one.",
    ],
  },
  {
    word: "remote",
    hints: [
      "People use it from the couch.",
      "It controls a television.",
      "Buttons change the channel.",
      "You point it at the screen.",
      "Batteries hide in the back.",
      "Losing it between cushions is common.",
    ],
  },
  {
    word: "river",
    hints: [
      "It is found in nature.",
      "It is a flow of fresh water.",
      "It moves from high ground toward the sea.",
      "Banks line both sides.",
      "Boats and fish travel along it.",
      "A bridge may cross over it.",
    ],
  },
  {
    word: "ruler",
    hints: [
      "Students use it.",
      "It measures length.",
      "Straight marks show inches or centimeters.",
      "It is long, flat, and stiff.",
      "A straight line can be drawn with it.",
      "Desks often have one in a tray.",
    ],
  },
  {
    word: "scissors",
    hints: [
      "People use them to cut.",
      "Two blades cross in the middle.",
      "Fingers go through the loops.",
      "Paper, hair, and cloth get snipped.",
      "They open and close like jaws.",
      "Pointed tips need careful hands.",
    ],
  },
  {
    word: "scooter",
    hints: [
      "People ride it.",
      "It has a narrow board for your feet.",
      "Handlebars help you steer.",
      "You push off with one foot.",
      "Two small wheels roll it along.",
      "Kids zip down sidewalks on one.",
    ],
  },
  {
    word: "scorpion",
    hints: [
      "It is an animal.",
      "It is a small desert creature.",
      "Eight legs walk it along.",
      "Pincers grab at the front.",
      "A curved tail arches overhead.",
      "A stinger at the tip can hurt.",
    ],
  },
  {
    word: "shark",
    hints: [
      "It is an animal.",
      "It lives in the ocean.",
      "It is a powerful fish.",
      "Rows of sharp teeth fill its mouth.",
      "A fin may slice the surface.",
      "It hunts by smell as well as sight.",
    ],
  },
  {
    word: "sheep",
    hints: [
      "It is an animal.",
      "It is raised on farms.",
      "A thick coat of wool covers it.",
      "It eats grass in a flock.",
      "The sound it makes is baa.",
      "The wool is cut off and spun.",
    ],
  },
  {
    word: "skateboard",
    hints: [
      "People ride it.",
      "A board rolls on four wheels.",
      "You stand sideways on the deck.",
      "You push with one foot to start.",
      "Tricks happen at parks and ramps.",
      "A helmet is wise while learning.",
    ],
  },
  {
    word: "skunk",
    hints: [
      "It is an animal.",
      "It is about the size of a cat.",
      "Black fur wears a white stripe.",
      "It comes out at night.",
      "A raised tail is a warning.",
      "A terrible spray is its defense.",
    ],
  },
  {
    word: "slipper",
    hints: [
      "People wear it indoors.",
      "It is a soft shoe.",
      "It slips on without laces.",
      "Bedrooms and hallways are its home.",
      "A pair waits by the bed.",
      "Cold floors are the reason for it.",
    ],
  },
  {
    word: "snail",
    hints: [
      "It is an animal.",
      "It moves extremely slowly.",
      "A coiled shell sits on its back.",
      "A slimy trail shows where it went.",
      "It has two pairs of tentacles.",
      "Gardens find it on wet leaves.",
    ],
  },
  {
    word: "snake",
    hints: [
      "It is an animal.",
      "It is a long reptile.",
      "It has no legs.",
      "Scales cover its body.",
      "It flicks a forked tongue.",
      "Some kinds are venomous.",
    ],
  },
  {
    word: "snowman",
    hints: [
      "People build it in winter.",
      "Three snowballs stack into a body.",
      "A hat or scarf may dress it.",
      "A carrot can stand in for a nose.",
      "Sticks become the arms.",
      "Sunshine will melt it away.",
    ],
  },
  {
    word: "soap",
    hints: [
      "People use it to get clean.",
      "It makes bubbles with water.",
      "Hands get rubbed with it.",
      "A bar or a pump bottle holds it.",
      "Germs wash away in the suds.",
      "A sink is its usual spot.",
    ],
  },
  {
    word: "sock",
    hints: [
      "People wear it.",
      "It covers a foot.",
      "It goes on before a shoe.",
      "Fabric stretches to fit.",
      "Pairs can vanish in the laundry.",
      "Toes stay warmer because of it.",
    ],
  },
  {
    word: "spider",
    hints: [
      "It is an animal.",
      "It has eight legs.",
      "It spins silk.",
      "A web may catch its food.",
      "Some kinds are tiny and housebound.",
      "A bite from a few kinds hurts.",
    ],
  },
  {
    word: "spoon",
    hints: [
      "It is a utensil.",
      "You eat with it.",
      "A small bowl sits at one end.",
      "Soup and cereal need it.",
      "It rests beside a fork.",
      "Babies get a tiny one.",
    ],
  },
  {
    word: "squirrel",
    hints: [
      "It is an animal.",
      "It lives in trees.",
      "A bushy tail arches behind.",
      "It chatters and leaps on branches.",
      "Nuts are buried for later.",
      "Acorns are a favorite food.",
    ],
  },
  {
    word: "starfish",
    hints: [
      "It is an animal.",
      "It lives in the ocean.",
      "Five arms spread from the center.",
      "It clings to rocks and tide pools.",
      "The shape looks like a star.",
      "It can regrow a lost arm.",
    ],
  },
  {
    word: "strawberry",
    hints: [
      "You can eat it.",
      "It is a red fruit.",
      "Seeds speckle the outside.",
      "A green cap sits on top.",
      "Shortcake and jam both use it.",
      "It grows low to the ground.",
    ],
  },
  {
    word: "suitcase",
    hints: [
      "People pack it for trips.",
      "Clothes go inside.",
      "A handle lets you carry it.",
      "Wheels may roll it through airports.",
      "A zipper closes it shut.",
      "A luggage tag shows your name.",
    ],
  },
  {
    word: "sunflower",
    hints: [
      "It is a plant.",
      "It grows very tall.",
      "A huge bloom faces the light.",
      "Yellow petals ring a dark center.",
      "Seeds pack that center.",
      "Birds and snacks both want the seeds.",
    ],
  },
  {
    word: "swan",
    hints: [
      "It is an animal.",
      "It is a large water bird.",
      "A long neck curves in an S.",
      "White feathers are the usual color.",
      "It glides across lakes.",
      "A fierce hiss warns you away.",
    ],
  },
  {
    word: "swing",
    hints: [
      "It is found at a playground.",
      "A seat hangs from chains or ropes.",
      "You sit and pump your legs.",
      "You move forward and back through the air.",
      "A set of them shares one frame.",
      "Going high is the fun part.",
    ],
  },
  {
    word: "taco",
    hints: [
      "You can eat it.",
      "It is a handheld meal.",
      "A tortilla shell holds the filling.",
      "Meat, lettuce, and cheese pile in.",
      "It is folded, not rolled shut.",
      "Salsa adds a spicy kick.",
    ],
  },
  {
    word: "telephone",
    hints: [
      "People use it to talk far away.",
      "You hold it to your ear.",
      "A voice travels through it.",
      "Numbers are pressed to connect.",
      "It can ring when someone calls.",
      "Pockets now carry a tiny one.",
    ],
  },
  {
    word: "telescope",
    hints: [
      "People made it.",
      "It helps you see faraway things.",
      "A long tube points at the sky.",
      "Lenses or mirrors gather light.",
      "Stars and planets look closer.",
      "You look through the small end.",
    ],
  },
  {
    word: "television",
    hints: [
      "People watch it at home.",
      "Moving pictures play on a screen.",
      "Shows and news come through it.",
      "A remote changes what is on.",
      "A living room often faces it.",
      "It is often just called a TV.",
    ],
  },
  {
    word: "tent",
    hints: [
      "People sleep in it outdoors.",
      "Fabric walls keep out the weather.",
      "Poles hold the shape up.",
      "You crawl through a zippered door.",
      "Camping trips depend on one.",
      "Stakes pin it to the ground.",
    ],
  },
  {
    word: "thermometer",
    hints: [
      "People use it.",
      "It measures how hot something is.",
      "A number shows the temperature.",
      "One kind goes under the tongue.",
      "Another hangs on an outside wall.",
      "Fever checks start with it.",
    ],
  },
  {
    word: "thunder",
    hints: [
      "It is a kind of weather.",
      "It comes with a storm.",
      "It is a deep rumbling sound.",
      "A bright flash usually comes first.",
      "It can shake the windows.",
      "Rain often follows close behind.",
    ],
  },
  {
    word: "tiger",
    hints: [
      "It is an animal.",
      "It is the largest big cat.",
      "Orange fur wears black stripes.",
      "It is a powerful hunter.",
      "It lives in Asian forests.",
      "It likes to swim.",
    ],
  },
  {
    word: "toaster",
    hints: [
      "It is a kitchen machine.",
      "Bread goes into the slots.",
      "A lever pushes the bread down.",
      "Heat browns it.",
      "It pops up when it is done.",
      "Jelly waits for the result.",
    ],
  },
  {
    word: "tomato",
    hints: [
      "You can eat it.",
      "It is a fruit used like a vegetable.",
      "It is round and red.",
      "It grows on a vine.",
      "Salads and sauces both need it.",
      "A slice belongs on a burger.",
    ],
  },
  {
    word: "toothbrush",
    hints: [
      "People use it every day.",
      "It cleans your teeth.",
      "Bristles cover one end.",
      "A handle fills your hand.",
      "Paste is added before you scrub.",
      "Dentists remind you to use it.",
    ],
  },
  {
    word: "towel",
    hints: [
      "People use it after washing.",
      "Soft fabric soaks up water.",
      "You dry your hands or body.",
      "A bar or hook holds it.",
      "Beaches call for a big one.",
      "A wet one gets heavy.",
    ],
  },
  {
    word: "trampoline",
    hints: [
      "People jump on it.",
      "A stretched mat springs you up.",
      "A frame holds the mat tight.",
      "A net may surround it for safety.",
      "Backyards and gyms both have one.",
      "Flips take practice.",
    ],
  },
  {
    word: "trophy",
    hints: [
      "People win it.",
      "It is a prize.",
      "A cup or figure sits on a base.",
      "A team or contest awards it.",
      "Your name may be engraved.",
      "A shelf is where it ends up.",
    ],
  },
  {
    word: "turkey",
    hints: [
      "It is an animal.",
      "It is a large bird.",
      "A fan of tail feathers can spread.",
      "A wattle hangs from its throat.",
      "It gobbles instead of clucking.",
      "A feast in November centers on it.",
    ],
  },
  {
    word: "vacuum",
    hints: [
      "It is a cleaning machine.",
      "It sucks up dirt.",
      "A hose or nozzle reaches the mess.",
      "A bag or bin catches the dust.",
      "Rugs and floors both get a turn.",
      "A loud hum means it is working.",
    ],
  },
  {
    word: "wallet",
    hints: [
      "People carry it.",
      "Money and cards fit inside.",
      "It folds and slips in a pocket.",
      "An ID often has a window.",
      "Losing it is a real problem.",
      "Leather is a common material.",
    ],
  },
  {
    word: "watermelon",
    hints: [
      "You can eat it.",
      "It is a huge fruit.",
      "A thick rind surrounds the flesh.",
      "The inside is red and juicy.",
      "Black seeds dot the middle.",
      "Summer picnics end with a slice.",
    ],
  },
  {
    word: "whale",
    hints: [
      "It is an animal.",
      "It lives in the ocean.",
      "It is a giant mammal.",
      "A blowhole shoots mist upward.",
      "Some kinds sing long songs.",
      "It is far bigger than any fish.",
    ],
  },
  {
    word: "window",
    hints: [
      "It is part of a building.",
      "You can see through it.",
      "Glass fills the frame.",
      "It lets light into a room.",
      "A latch lets you slide it open.",
      "Curtains may cover it.",
    ],
  },
  {
    word: "wolf",
    hints: [
      "It is an animal.",
      "It is a wild canine.",
      "It looks like a large dog.",
      "It howls to call the pack.",
      "It hunts in groups.",
      "Forests and tundra are its homes.",
    ],
  },
  {
    word: "wrench",
    hints: [
      "It is a tool.",
      "It turns nuts and bolts.",
      "Metal jaws grip the sides.",
      "A handle gives you leverage.",
      "Mechanics keep a set of them.",
      "The right size keeps the edges safe.",
    ],
  },
  {
    word: "apron",
    hints: [
      "People wear it while cooking.",
      "It covers the front of your clothes.",
      "A tie goes around the neck or waist.",
      "Spills land on it instead of a shirt.",
      "Pockets may hold a spoon.",
      "Bakers and painters both use one.",
    ],
  },
  {
    word: "bakery",
    hints: [
      "It is a kind of shop.",
      "Fresh bread is made there.",
      "The air smells sweet and warm.",
      "Cakes and pastries fill the cases.",
      "You can buy something for breakfast.",
      "A baker works before sunrise.",
    ],
  },
  {
    word: "barn",
    hints: [
      "It is a building on a farm.",
      "Animals can sleep inside.",
      "Hay may be stored in the loft.",
      "Big doors slide or swing open.",
      "It is often painted red.",
      "Tractors park beside it.",
    ],
  },
  {
    word: "beehive",
    hints: [
      "It is a kind of home.",
      "Thousands of insects live inside.",
      "Honey is stored in the combs.",
      "A queen stays at the center.",
      "Beekeepers wear a veil nearby.",
      "A low hum comes from inside.",
    ],
  },
  {
    word: "blueberry",
    hints: [
      "You can eat it.",
      "It is a small round fruit.",
      "The color is deep blue.",
      "It grows on a low bush.",
      "Muffins and pancakes get a handful.",
      "The taste is sweet and a little tart.",
    ],
  },
  {
    word: "bonfire",
    hints: [
      "People build it outdoors.",
      "Wood is stacked and lit.",
      "Flames climb high into the night.",
      "Friends gather around the warmth.",
      "Marshmallows may be roasted nearby.",
      "Sparks rise when a log shifts.",
    ],
  },
  {
    word: "bowling",
    hints: [
      "It is a sport.",
      "You roll a heavy ball.",
      "The ball travels down a long lane.",
      "Pins wait at the far end.",
      "Knocking all of them down is a strike.",
      "Special shoes are worn on the approach.",
    ],
  },
  {
    word: "bracelet",
    hints: [
      "People wear it.",
      "It circles the wrist.",
      "Beads, metal, or string can make it.",
      "It is jewelry.",
      "A clasp may hold it closed.",
      "Charms can dangle from it.",
    ],
  },
  {
    word: "brick",
    hints: [
      "People build with it.",
      "It is a hard rectangular block.",
      "Clay is baked to make it.",
      "Walls and chimneys use rows of them.",
      "Mortar holds the rows together.",
      "The usual color is red.",
    ],
  },
  {
    word: "bubble",
    hints: [
      "It is round and fragile.",
      "Soap and air can make it.",
      "A thin film catches the light.",
      "It floats, then pops.",
      "Kids chase them across a yard.",
      "A wand and a bottle start the fun.",
    ],
  },
  {
    word: "firefly",
    hints: [
      "It is an animal.",
      "It is a small insect.",
      "It comes out on summer nights.",
      "A glow blinks from its belly.",
      "Fields sparkle when many gather.",
      "Kids catch them in jars.",
    ],
  },
  {
    word: "seahorse",
    hints: [
      "It is an animal.",
      "It lives in the ocean.",
      "It is a tiny fish.",
      "It swims standing upright.",
      "A curled tail grips seaweed.",
      "The head looks like a little horse.",
    ],
  },
  {
    word: "francois",
    hints: [
      "She is a creature.",
      "She is a pet.",
      "She is a female cat.",
      "Her mother is named Hailey.",
      "She is blind.",
      "She is the most bestest creature in the world.",
    ],
  },
];

const HARD_WORDS = [
  {
    word: "abacus",
    hints: [
    "People made it long ago.",
    "It is a counting tool.",
    "Beads slide on rods.",
    "Each rod stands for a place value.",
    "You push the beads to add.",
    "It came long before pocket calculators.",
    ],
  },
  {
    word: "albatross",
    hints: [
    "It is an animal.",
    "It is a huge seabird.",
    "Its wings stretch very wide.",
    "It glides over the ocean for days.",
    "Sailors once thought it brought luck.",
    "A poem made it a famous burden.",
    ],
  },
  {
    word: "amethyst",
    hints: [
    "You might wear it.",
    "It is a kind of gem.",
    "The usual color is purple.",
    "It is a variety of quartz.",
    "Jewelry often sets it in silver.",
    "February birthdays claim it.",
    ],
  },
  {
    word: "armadillo",
    hints: [
    "It is an animal.",
    "It lives in warm grasslands.",
    "Bony plates cover its back.",
    "It can roll into a ball.",
    "It digs burrows with strong claws.",
    "The Americas are its home.",
    ],
  },
  {
    word: "boomerang",
    hints: [
    "People made it.",
    "It is a throwing stick.",
    "A curved shape cuts the air.",
    "Some kinds circle back to you.",
    "Hunters in Australia used it.",
    "A good throw makes it spin flat.",
    ],
  },
  {
    word: "carousel",
    hints: [
    "People ride it for fun.",
    "It turns in a circle.",
    "Painted animals move up and down.",
    "Music plays as it spins.",
    "Fairs and parks often have one.",
    "You grab a brass ring on some.",
    ],
  },
  {
    word: "cassowary",
    hints: [
    "It is an animal.",
    "It is a huge bird.",
    "It cannot fly.",
    "A helmet-like crest tops its head.",
    "Sharp claws make it dangerous.",
    "Rainforests in New Guinea hide it.",
    ],
  },
  {
    word: "catapult",
    hints: [
    "People built it long ago.",
    "It is a war machine.",
    "It hurls heavy objects.",
    "A long arm snaps forward.",
    "Stones or fire could be the load.",
    "Castle walls feared it.",
    ],
  },
  {
    word: "chameleon",
    hints: [
    "It is an animal.",
    "It is a kind of lizard.",
    "Its eyes swivel separately.",
    "A long tongue snaps up insects.",
    "Its skin can shift color.",
    "A curled tail grips branches.",
    ],
  },
  {
    word: "chandelier",
    hints: [
    "It hangs indoors.",
    "It holds many lights.",
    "Crystals may dangle from it.",
    "A chain drops it from the ceiling.",
    "Ballrooms and theaters use them.",
    "It glitters when the lights are on.",
    ],
  },
  {
    word: "chrysalis",
    hints: [
    "It is part of a life cycle.",
    "A caterpillar makes it.",
    "The case is hard and still.",
    "Big changes happen inside.",
    "Wings form before it splits open.",
    "A butterfly comes out at the end.",
    ],
  },
  {
    word: "cockatoo",
    hints: [
    "It is an animal.",
    "It is a kind of parrot.",
    "A crest fans up on its head.",
    "Most are white or pinkish.",
    "It can be very loud.",
    "Australia is where many live.",
    ],
  },
  {
    word: "constellation",
    hints: [
    "You can see it at night.",
    "Stars form a picture.",
    "People named the shapes long ago.",
    "Orion and the Dipper are famous.",
    "The pattern shifts with the seasons.",
    "A star map helps you find one.",
    ],
  },
  {
    word: "cuttlefish",
    hints: [
    "It is an animal.",
    "It lives in the ocean.",
    "It is a relative of squid.",
    "Skin can flash new colors fast.",
    "It has eight arms and two tentacles.",
    "A chalky inner shell is the cuttlebone.",
    ],
  },
  {
    word: "daffodil",
    hints: [
    "It is a plant.",
    "It blooms in spring.",
    "The flower is usually yellow.",
    "A trumpet shape sits in the center.",
    "Bulbs sleep underground all winter.",
    "Poets used it as a sign of hope.",
    ],
  },
  {
    word: "didgeridoo",
    hints: [
    "People made it.",
    "It is a musical instrument.",
    "A long hollow tube is the body.",
    "You buzz your lips into one end.",
    "Circular breathing keeps the drone going.",
    "Aboriginal Australians created it.",
    ],
  },
  {
    word: "echidna",
    hints: [
    "It is an animal.",
    "It lives in Australia.",
    "Spines cover its back.",
    "A long snout hunts ants.",
    "It lays eggs, which is rare for mammals.",
    "It is a cousin of the platypus.",
    ],
  },
  {
    word: "eucalyptus",
    hints: [
    "It is a plant.",
    "It is a tall tree.",
    "The leaves smell sharp and minty.",
    "Koalas eat almost nothing else.",
    "Peeling bark hangs in ribbons.",
    "Oil from the leaves clears a stuffy nose.",
    ],
  },
  {
    word: "geyser",
    hints: [
    "It is found in nature.",
    "Hot water bursts from the ground.",
    "Steam shoots high into the air.",
    "Underground heat powers it.",
    "It may erupt on a schedule.",
    "Yellowstone has a famous one.",
    ],
  },
  {
    word: "gondola",
    hints: [
    "People ride in it.",
    "It is a long narrow boat.",
    "One person stands at the back.",
    "A single oar steers and pushes.",
    "Canals are its usual road.",
    "Venice is the city most linked to it.",
    ],
  },
  {
    word: "gyroscope",
    hints: [
    "People made it.",
    "It is a spinning device.",
    "A wheel turns inside a frame.",
    "Spinning keeps it steady.",
    "Ships and planes use that steadiness.",
    "Tilting it feels strangely stubborn.",
    ],
  },
  {
    word: "hieroglyph",
    hints: [
    "People wrote with it.",
    "It is an ancient picture-sign.",
    "Egypt carved these on stone.",
    "A bird or eye can be one symbol.",
    "They can stand for sounds or ideas.",
    "The Rosetta Stone helped decode them.",
    ],
  },
  {
    word: "hyena",
    hints: [
    "It is an animal.",
    "It is a hunter and a scavenger.",
    "A sloping back makes it look odd.",
    "Its laugh is a famous call.",
    "Strong jaws crush bone.",
    "Clans roam African grasslands.",
    ],
  },
  {
    word: "ibex",
    hints: [
    "It is an animal.",
    "It is a wild goat.",
    "Huge curved horns sweep back.",
    "It climbs cliffs that look impossible.",
    "Hooves grip tiny rock ledges.",
    "Mountains in Europe and Asia hold it.",
    ],
  },
  {
    word: "kaleidoscope",
    hints: [
    "People made it.",
    "It is a toy you look through.",
    "Mirrors line the inside of a tube.",
    "Bits of color tumble at the far end.",
    "Each turn makes a new pattern.",
    "The picture is always symmetrical.",
    ],
  },
  {
    word: "labyrinth",
    hints: [
    "It is a kind of place.",
    "Paths twist and double back.",
    "High walls or hedges may line it.",
    "Finding the center is the challenge.",
    "A monster lived in a famous one.",
    "A string can mark the way out.",
    ],
  },
  {
    word: "lemur",
    hints: [
    "It is an animal.",
    "It is a primate.",
    "Big eyes suit a night life.",
    "A long tail helps it balance.",
    "It lives only on Madagascar.",
    "Some kinds leap between trees.",
    ],
  },
  {
    word: "mannequin",
    hints: [
    "People made it.",
    "It is a model of a person.",
    "Shops dress it in clothes.",
    "It never moves or speaks.",
    "A wig and makeup complete the look.",
    "Window displays often feature one.",
    ],
  },
  {
    word: "marionette",
    hints: [
    "People made it.",
    "It is a kind of puppet.",
    "Strings run from its limbs.",
    "A frame above controls those strings.",
    "The puppeteer stays out of sight.",
    "A twitch of a hand makes it bow.",
    ],
  },
  {
    word: "meerkat",
    hints: [
    "It is an animal.",
    "It is a small mongoose relative.",
    "It stands tall on its hind legs.",
    "A dark patch rings each eye.",
    "Groups take turns as lookouts.",
    "The Kalahari desert is its home.",
    ],
  },
  {
    word: "metronome",
    hints: [
    "People made it.",
    "Musicians use it.",
    "It clicks at a steady pace.",
    "A sliding weight changes the speed.",
    "The ticks help you keep time.",
    "A pendulum or a digital beep can do it.",
    ],
  },
  {
    word: "mongoose",
    hints: [
    "It is an animal.",
    "It is small, quick, and bold.",
    "A long body and short legs define it.",
    "It is famous for fighting snakes.",
    "Sharp reflexes dodge a strike.",
    "India and Africa both have them.",
    ],
  },
  {
    word: "narwhal",
    hints: [
    "It is an animal.",
    "It is a whale of the Arctic.",
    "Males grow one very long tusk.",
    "The tusk is actually a tooth.",
    "It swims under sea ice.",
    "Sailors once sold the tusk as a horn.",
    ],
  },
  {
    word: "obelisk",
    hints: [
    "People built it.",
    "It is a tall stone pillar.",
    "Four sides taper as they rise.",
    "A small pyramid caps the top.",
    "Egypt carved many of them.",
    "Some were later moved to other cities.",
    ],
  },
  {
    word: "ocarina",
    hints: [
    "People made it.",
    "It is a small wind instrument.",
    "The body is a rounded vessel.",
    "Finger holes change the note.",
    "You blow into a short mouthpiece.",
    "Video games made one shape famous.",
    ],
  },
  {
    word: "okapi",
    hints: [
    "It is an animal.",
    "It lives in African rainforests.",
    "It is the giraffe's only close relative.",
    "Its neck is much shorter.",
    "Hind legs wear zebra-like stripes.",
    "A long tongue strips leaves from trees.",
    ],
  },
  {
    word: "origami",
    hints: [
    "People make it.",
    "It is the art of folding paper.",
    "No scissors or glue are required.",
    "A flat sheet becomes a shape.",
    "Cranes are a classic result.",
    "Japan is the tradition most linked to it.",
    ],
  },
  {
    word: "pangolin",
    hints: [
    "It is an animal.",
    "Scales made of keratin cover it.",
    "It rolls into a ball when scared.",
    "A long tongue slurps ants.",
    "It is the most trafficked wild mammal.",
    "Africa and Asia are its homes.",
    ],
  },
  {
    word: "pelican",
    hints: [
    "It is an animal.",
    "It is a large water bird.",
    "A huge pouch hangs under the beak.",
    "The pouch scoops up fish.",
    "It crash-dives or swims to feed.",
    "Webbed feet push it through the water.",
    ],
  },
  {
    word: "pendulum",
    hints: [
    "People use it in clocks.",
    "A weight hangs from a pivot.",
    "It swings back and forth.",
    "Each swing takes nearly the same time.",
    "Length changes that timing.",
    "Gravity is what pulls it down.",
    ],
  },
  {
    word: "pharaoh",
    hints: [
    "It was a kind of ruler.",
    "Ancient Egypt had many.",
    "A crown and false beard marked one.",
    "Pyramids sometimes held their tombs.",
    "They were treated as living gods.",
    "Tutankhamun is a famous name.",
    ],
  },
  {
    word: "platypus",
    hints: [
    "It is an animal.",
    "It lives in Australian rivers.",
    "A duck-like bill fronts its face.",
    "It lays eggs but nurses its young.",
    "A flat tail stores fat.",
    "Males have a venomous spur.",
    ],
  },
  {
    word: "rhinoceros",
    hints: [
    "It is an animal.",
    "It is huge and thick-skinned.",
    "One or two horns grow on the snout.",
    "The horn is made of keratin.",
    "It eats plants, not meat.",
    "Poaching has made it rare.",
    ],
  },
  {
    word: "salamander",
    hints: [
    "It is an animal.",
    "It is an amphibian.",
    "It looks like a small lizard.",
    "Damp forests and streams suit it.",
    "Some kinds regrow a lost limb.",
    "Bright colors can warn of poison.",
    ],
  },
  {
    word: "sphinx",
    hints: [
    "It appears in old stories.",
    "It has a human head.",
    "A lion's body completes it.",
    "Egypt carved a giant one in stone.",
    "A riddle was its famous test.",
    "Failing the riddle was deadly.",
    ],
  },
  {
    word: "stalactite",
    hints: [
    "It is found in caves.",
    "Minerals build it drip by drip.",
    "It hangs down from the ceiling.",
    "The matching spike below grows up.",
    "Water leaves a tiny deposit each time.",
    "A memory trick says it holds tight.",
    ],
  },
  {
    word: "stethoscope",
    hints: [
    "Doctors carry it.",
    "It listens inside the body.",
    "Earpieces connect to a chest piece.",
    "Tubing carries the sound.",
    "A heartbeat is the usual target.",
    "The cold metal makes patients flinch.",
    ],
  },
  {
    word: "sundial",
    hints: [
    "People made it long ago.",
    "It tells the time.",
    "A shadow is the moving hand.",
    "Sunlight has to be shining.",
    "The angled piece is called a gnomon.",
    "Gardens sometimes still display one.",
    ],
  },
  {
    word: "tambourine",
    hints: [
    "People made it.",
    "It is a musical instrument.",
    "A shallow drum has no bottom.",
    "Metal jingles ring the frame.",
    "You shake it or tap the skin.",
    "Dancers often hold one.",
    ],
  },
  {
    word: "tarantula",
    hints: [
    "It is an animal.",
    "It is a large spider.",
    "Hairy legs make it look bigger.",
    "It lives in a burrow or tree.",
    "Most kinds are shy, not deadly.",
    "A bite hurts but rarely kills.",
    ],
  },
  {
    word: "triceratops",
    hints: [
    "It lived long ago.",
    "It was a dinosaur.",
    "Three horns pointed from its face.",
    "A wide bony frill guarded the neck.",
    "It ate plants, not meat.",
    "Fossils show it fought with predators.",
    ],
  },
  {
    word: "velociraptor",
    hints: [
    "It lived long ago.",
    "It was a dinosaur.",
    "It was smaller than movies suggest.",
    "A curved claw rose on each foot.",
    "Feathers likely covered its body.",
    "It hunted in the Cretaceous period.",
    ],
  },
  {
    word: "walrus",
    hints: [
    "It is an animal.",
    "It lives in the Arctic.",
    "Two long tusks point downward.",
    "Whiskers help it find clams.",
    "It hauls out on sea ice.",
    "Blubber keeps it warm.",
    ],
  },
  {
    word: "wombat",
    hints: [
    "It is an animal.",
    "It lives in Australia.",
    "It looks like a stocky bear.",
    "Strong claws dig long burrows.",
    "Its pouch faces backward.",
    "Cube-shaped droppings mark its trail.",
    ],
  },
  {
    word: "yurt",
    hints: [
    "People live in it.",
    "It is a round tent.",
    "A wooden lattice forms the walls.",
    "Felt or skins cover the frame.",
    "Nomads of Central Asia use it.",
    "A hole in the roof lets smoke out.",
    ],
  },
  {
    word: "zeppelin",
    hints: [
    "People built it.",
    "It is an airship.",
    "A huge gas bag provides lift.",
    "A cabin hangs underneath.",
    "It flies more slowly than a plane.",
    "The Hindenburg made the name famous.",
    ],
  },
  {
    word: "francois",
    hints: [
    "She is a creature.",
    "She is a pet.",
    "She is a female cat.",
    "Her mother is named Hailey.",
    "She is blind.",
    "She is the most bestest creature in the world.",
    ],
  },
  {
    word: "accordion",
    hints: [
    "People made it.",
    "It is a musical instrument.",
    "You squeeze it to push air.",
    "Bellows fold in and out.",
    "Keys and buttons sit on one side.",
    "A polka band often features it.",
    ],
  },
  {
    word: "anaconda",
    hints: [
    "It is an animal.",
    "It lives in warm rivers.",
    "It is a huge snake.",
    "It squeezes prey instead of biting.",
    "South American jungles hide it.",
    "It is one of the heaviest snakes alive.",
    ],
  },
  {
    word: "antelope",
    hints: [
    "It is an animal.",
    "It lives on open grassland.",
    "It eats plants and runs fast.",
    "Horns rise from its head.",
    "Herds watch for big cats.",
    "The African plains are its home.",
    ],
  },
  {
    word: "artichoke",
    hints: [
    "You can eat it.",
    "It is a vegetable.",
    "Layers of leaves wrap the center.",
    "You peel the leaves to snack.",
    "The soft heart is the best bite.",
    "It looks like a tight green flower.",
    ],
  },
  {
    word: "asteroid",
    hints: [
    "It is found in space.",
    "It is a chunk of rock.",
    "It orbits the Sun.",
    "Most stay between two planets.",
    "A big one can leave a crater.",
    "Scientists track ones that pass near Earth.",
    ],
  },
  {
    word: "badminton",
    hints: [
    "People play it.",
    "It is a racket sport.",
    "A light shuttle flies over a net.",
    "You hit that shuttle back and forth.",
    "The court is smaller than tennis.",
    "A feathered cork is the usual birdie.",
    ],
  },
  {
    word: "barometer",
    hints: [
    "People use it.",
    "It is a measuring tool.",
    "It watches the air around you.",
    "The reading rises or falls.",
    "Weather forecasts depend on it.",
    "It measures the pressure of the air.",
    ],
  },
  {
    word: "binoculars",
    hints: [
    "People made it.",
    "You hold it up to your eyes.",
    "Two tubes let you see far away.",
    "A focus wheel sharpens the view.",
    "Birdwatchers carry a pair.",
    "Each eye gets its own lens.",
    ],
  },
  {
    word: "bonsai",
    hints: [
    "It is a plant.",
    "People grow it in a pot.",
    "It is a tiny tree.",
    "Wire and shears shape the branches.",
    "The art came from Japan.",
    "Decades of care keep it small.",
    ],
  },
  {
    word: "calligraphy",
    hints: [
    "People make it.",
    "It is a kind of writing.",
    "Every letter is drawn with care.",
    "A special pen or brush is used.",
    "The strokes can look like art.",
    "Invitations sometimes use this script.",
    ],
  },
  {
    word: "capybara",
    hints: [
    "It is an animal.",
    "It lives near rivers in South America.",
    "It is a giant rodent.",
    "Webbed feet help it swim.",
    "It grazes on grass all day.",
    "Other animals often sit on its back.",
    ],
  },
  {
    word: "centipede",
    hints: [
    "It is an animal.",
    "It is a small crawler.",
    "Many legs line its body.",
    "It hides under logs and stones.",
    "A bite from one can sting.",
    "The name suggests a hundred feet.",
    ],
  },
  {
    word: "clarinet",
    hints: [
    "People made it.",
    "It is a musical instrument.",
    "It is a woodwind.",
    "A single reed vibrates at the mouthpiece.",
    "Black keys run down the tube.",
    "Jazz and orchestras both use it.",
    ],
  },
  {
    word: "croissant",
    hints: [
    "You can eat it.",
    "It is a baked good.",
    "The shape is a curved crescent.",
    "Butter makes the layers flaky.",
    "Bakeries sell it in the morning.",
    "France made this pastry famous.",
    ],
  },
  {
    word: "gazelle",
    hints: [
    "It is an animal.",
    "It lives on dry grasslands.",
    "It is slender and very fast.",
    "Horns curve back on many of them.",
    "It bounds away from hunters.",
    "Cheetahs chase it across Africa.",
    ],
  },
  {
    word: "gecko",
    hints: [
    "It is an animal.",
    "It is a small lizard.",
    "Sticky toes let it climb walls.",
    "Many kinds chirp at night.",
    "It can drop its tail to escape.",
    "Warm houses sometimes host one.",
    ],
  },
  {
    word: "gladiator",
    hints: [
    "It was a kind of person.",
    "Crowds once paid to watch.",
    "The fights happened in an arena.",
    "A sword or net was a common weapon.",
    "Ancient Rome made the role famous.",
    "The emperor could spare the loser.",
    ],
  },
  {
    word: "harpsichord",
    hints: [
    "People made it.",
    "It is a musical instrument.",
    "It has a keyboard like a piano.",
    "Strings are plucked, not hammered.",
    "Baroque composers wrote for it.",
    "It came long before the piano.",
    ],
  },
  {
    word: "hibiscus",
    hints: [
    "It is a plant.",
    "It grows in warm places.",
    "The flower is large and showy.",
    "Red, pink, or yellow are common.",
    "A long stamen sticks out of the center.",
    "Tea is sometimes made from the petals.",
    ],
  },
  {
    word: "iguana",
    hints: [
    "It is an animal.",
    "It is a large lizard.",
    "A spiny crest runs down its back.",
    "It likes to bask in the sun.",
    "Many live in tropical trees.",
    "Some can swim when they need to.",
    ],
  },
  {
    word: "jukebox",
    hints: [
    "People made it.",
    "It plays recorded music.",
    "You pick a song from a list.",
    "Coins once started the tune.",
    "Diners used to keep one in the corner.",
    "Lights flash while the record spins.",
    ],
  },
  {
    word: "kimono",
    hints: [
    "People wear it.",
    "It is a kind of robe.",
    "A wide sash ties it closed.",
    "Long sleeves hang past the wrists.",
    "Japan is the country most linked to it.",
    "Silk with a painted design is traditional.",
    ],
  },
  {
    word: "kumquat",
    hints: [
    "You can eat it.",
    "It is a small fruit.",
    "The peel is sweet and the inside is tart.",
    "It looks like a tiny orange.",
    "You can eat the skin and all.",
    "It grows on a citrus tree.",
    ],
  },
  {
    word: "leprechaun",
    hints: [
    "It appears in old stories.",
    "It is a tiny person.",
    "A hidden pot of gold is the prize.",
    "Green clothes are the usual look.",
    "Ireland is the home of the tale.",
    "Catching one may earn you a wish.",
    ],
  },
  {
    word: "mandolin",
    hints: [
    "People made it.",
    "It is a musical instrument.",
    "Strings stretch over a round body.",
    "You pluck them with a pick.",
    "The neck has metal frets.",
    "Italian folk songs often feature it.",
    ],
  },
  {
    word: "maracas",
    hints: [
    "People made them.",
    "They are musical instruments.",
    "You shake them to make a beat.",
    "Seeds or beads rattle inside.",
    "A handle sticks out of each one.",
    "Latin dance bands use a pair.",
    ],
  },
  {
    word: "meteor",
    hints: [
    "You can see it at night.",
    "It is a rock from space.",
    "It burns as it hits the air.",
    "A bright streak crosses the sky.",
    "People call that streak a shooting star.",
    "Most of them never reach the ground.",
    ],
  },
  {
    word: "minotaur",
    hints: [
    "It appears in old stories.",
    "It is a monster.",
    "A bull's head sits on a human body.",
    "It lived inside a twisting maze.",
    "A hero from Greece came to face it.",
    "The maze was on the island of Crete.",
    ],
  },
  {
    word: "mosaic",
    hints: [
    "People make it.",
    "It is a kind of art.",
    "Tiny pieces form a picture.",
    "Tile, glass, or stone can be used.",
    "The pieces are set in plaster or glue.",
    "Floors in old ruins still show them.",
    ],
  },
  {
    word: "nautilus",
    hints: [
    "It is an animal.",
    "It lives in the deep ocean.",
    "A spiral shell covers its body.",
    "It is a relative of the octopus.",
    "Gas chambers help it rise or sink.",
    "The shell is a famous spiral shape.",
    ],
  },
  {
    word: "nightingale",
    hints: [
    "It is an animal.",
    "It is a small bird.",
    "It sings after the sun goes down.",
    "The song is loud and musical.",
    "Brown feathers make it hard to spot.",
    "Poets used its voice as a symbol.",
    ],
  },
  {
    word: "nutmeg",
    hints: [
    "You can eat it.",
    "It is a spice.",
    "Cooks grate it into food.",
    "It comes from a tropical seed.",
    "Eggnog and pies often use a pinch.",
    "The scent is warm and sweet.",
    ],
  },
  {
    word: "oboe",
    hints: [
    "People made it.",
    "It is a musical instrument.",
    "It is a woodwind.",
    "A double reed gives it a nasal tone.",
    "The tube is narrow and black.",
    "An orchestra tunes to its note.",
    ],
  },
  {
    word: "opossum",
    hints: [
    "It is an animal.",
    "It is a nocturnal mammal.",
    "A pouch carries its babies.",
    "It may fall over and play dead.",
    "A bare tail helps it climb.",
    "North America is home to a common one.",
    ],
  },
  {
    word: "orchid",
    hints: [
    "It is a plant.",
    "It is grown for its flowers.",
    "The blooms can last for weeks.",
    "One petal often has a special shape.",
    "Some kinds grow on tree branches.",
    "Florists sell it as a fancy gift.",
    ],
  },
  {
    word: "pagoda",
    hints: [
    "People built it.",
    "It is a kind of tower.",
    "The roofs stack in tiers.",
    "Each roof curls up at the corners.",
    "Temples in East Asia use this shape.",
    "Bells sometimes hang from the eaves.",
    ],
  },
  {
    word: "parakeet",
    hints: [
    "It is an animal.",
    "It is a small parrot.",
    "People keep it as a pet.",
    "A long tail trails behind it.",
    "It can learn to mimic sounds.",
    "Bright green feathers are common.",
    ],
  },
  {
    word: "periscope",
    hints: [
    "People made it.",
    "It lets you see around a corner.",
    "Mirrors bounce the view up a tube.",
    "Sailors used it underwater.",
    "A submarine can hide and still look.",
    "You raise it just above the surface.",
    ],
  },
  {
    word: "persimmon",
    hints: [
    "You can eat it.",
    "It is a fruit.",
    "It turns orange when it is ripe.",
    "An unripe one tastes very bitter.",
    "The soft flesh is sweet and jelly-like.",
    "It grows on a tree in autumn.",
    ],
  },
  {
    word: "piccolo",
    hints: [
    "People made it.",
    "It is a musical instrument.",
    "It is a tiny flute.",
    "The notes it plays are very high.",
    "You hold it sideways to blow.",
    "Marching bands use it for bright trills.",
    ],
  },
  {
    word: "pistachio",
    hints: [
    "You can eat it.",
    "It is a kind of nut.",
    "A hard shell splits open when ripe.",
    "The kernel inside is green.",
    "People snack on the salted ones.",
    "Ice cream sometimes uses this flavor.",
    ],
  },
  {
    word: "planetarium",
    hints: [
    "People built it.",
    "It is a place you visit.",
    "A dark dome curves over the seats.",
    "Lights above copy the night sky.",
    "A show points out stars and planets.",
    "You learn the constellations there.",
    ],
  },
  {
    word: "puffin",
    hints: [
    "It is an animal.",
    "It is a seabird.",
    "Its beak is brightly colored.",
    "It nests on rocky ocean cliffs.",
    "It can carry many fish at once.",
    "The beak looks a bit like a parrot.",
    ],
  },
  {
    word: "quill",
    hints: [
    "People used it long ago.",
    "It is a writing tool.",
    "A feather is the main part.",
    "The tip is cut to hold ink.",
    "Letters were dipped and scratched.",
    "It came before metal pens.",
    ],
  },
  {
    word: "rhubarb",
    hints: [
    "You can eat it.",
    "It is a plant from the garden.",
    "The stalks are red or pink.",
    "The leaves are sour and not eaten.",
    "Sugar is cooked with the stalks.",
    "Pies and crumbles use it in spring.",
    ],
  },
  {
    word: "rickshaw",
    hints: [
    "People ride in it.",
    "It is a small two-wheeled cart.",
    "A person pulls it along the street.",
    "A seat and a cover shelter the rider.",
    "Cities in Asia made it famous.",
    "Some modern ones use a bicycle.",
    ],
  },
];

const PLACES = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
  "eleventh",
  "twelfth",
];

const computerEl = document.querySelector("#computer");
const offImg = document.querySelector("#frame-off");
const onImg = document.querySelector("#frame-on");
const screenEl = document.querySelector("#screen");
const logEl = document.querySelector("#log");
const formEl = document.querySelector("#guess-form");
const inputEl = document.querySelector("#guess");
const winEl = document.querySelector("#win");
const winWordEl = document.querySelector("#win-word");
const winTimeEl = document.querySelector("#win-time");
const winBoardLabelEl = document.querySelector("#win-board-label");
const winBoardEl = document.querySelector("#win-board");
const overEl = document.querySelector("#over");
const overWordEl = document.querySelector("#over-word");
const continueBtn = document.querySelector("#continue-btn");
const overContinueBtn = document.querySelector("#over-continue");
const captionEl = document.querySelector("#caption");
const easyBtn = document.querySelector("#diff-easy");
const hardBtn = document.querySelector("#diff-hard");
const nameEl = document.querySelector("#player-name");
const resetBtn = document.querySelector("#reset-btn");

const SCORE_KEY = "computer-word-game-boards";
const NAME_KEY = "computer-word-game-name";

let state = "off";
let difficulty = "easy";
let deck = [];
let lastWord = "";
let current = null;
let hints = [];
let hintIndex = 0;
let lines = [];
let startedAt = 0;
let timerId = 0;

function normalize(value) {
  return value.toLowerCase().replace(/[^a-z]/g, "");
}

function shuffle(items) {
  const copy = items.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function activeWords() {
  return difficulty === "hard" ? HARD_WORDS : WORDS;
}

function setDifficulty(next) {
  if (state !== "off" || next === difficulty) return;
  difficulty = next;
  deck = [];
  const easy = next === "easy";
  easyBtn.classList.toggle("is-selected", easy);
  hardBtn.classList.toggle("is-selected", !easy);
  easyBtn.setAttribute("aria-pressed", easy ? "true" : "false");
  hardBtn.setAttribute("aria-pressed", easy ? "false" : "true");
}

function setDifficultyEnabled(enabled) {
  easyBtn.disabled = !enabled;
  hardBtn.disabled = !enabled;
  nameEl.disabled = !enabled;
}

function formatClock(ms) {
  const totalHundredths = Math.max(0, Math.floor(ms / 10));
  const hundredths = String(totalHundredths % 100).padStart(2, "0");
  const totalSeconds = Math.floor(totalHundredths / 100);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60);
  if (minutes > 0) return `${minutes}:${String(seconds).padStart(2, "0")}.${hundredths}`;
  return `${seconds}.${hundredths}s`;
}

function placeLabel(rank) {
  const teen = rank % 100;
  const suffix = teen >= 11 && teen <= 13 ? "th" : ["th", "st", "nd", "rd"][rank % 10] || "th";
  return `${rank}${suffix}`;
}

function cleanList(list) {
  if (!Array.isArray(list)) return [];
  return list.filter((entry) => entry && typeof entry.name === "string" && typeof entry.ms === "number");
}

function loadScores() {
  try {
    const data = JSON.parse(localStorage.getItem(SCORE_KEY) || "{}");
    if (!data || typeof data !== "object") return { easy: [], hard: [] };
    return { easy: cleanList(data.easy), hard: cleanList(data.hard) };
  } catch {
    return { easy: [], hard: [] };
  }
}

function playerName() {
  const name = nameEl.value.trim().replace(/\s+/g, " ").slice(0, 16);
  return name || "Player";
}

function recordScore(ms) {
  const scores = loadScores();
  const mode = difficulty === "hard" ? "hard" : "easy";
  const name = playerName();
  const list = scores[mode];
  const existing = list.find((entry) => entry.name === name);
  const improved = !existing || ms < existing.ms;
  if (!existing) list.push({ name, ms });
  else if (improved) existing.ms = ms;
  list.sort((a, b) => a.ms - b.ms || a.name.localeCompare(b.name));
  const rank = list.findIndex((entry) => entry.name === name) + 1;
  const best = list.find((entry) => entry.name === name).ms;
  scores[mode] = list.slice(0, 10);
  try {
    localStorage.setItem(SCORE_KEY, JSON.stringify(scores));
  } catch {
    /* This browser kept the board for this visit only. */
  }
  return { list: scores[mode], rank, improved, name, best, mode };
}

function renderBoard(list, name) {
  winBoardEl.replaceChildren();
  const shown = list.slice(0, 5);
  const mineIndex = list.findIndex((entry) => entry.name === name);
  if (mineIndex >= 5) shown.push(list[mineIndex]);
  shown.forEach((entry) => {
    const li = document.createElement("li");
    if (entry.name === name) li.className = "is-mine";
    const rank = document.createElement("span");
    rank.textContent = String(list.indexOf(entry) + 1);
    const who = document.createElement("span");
    who.textContent = entry.name;
    const time = document.createElement("span");
    time.textContent = formatClock(entry.ms);
    li.append(rank, who, time);
    winBoardEl.append(li);
  });
}

function stopTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = 0;
  }
}

function startTimer() {
  stopTimer();
  startedAt = performance.now();
  captionEl.textContent = formatClock(0);
  timerId = setInterval(() => {
    if (state !== "play" || !startedAt) return;
    captionEl.textContent = formatClock(performance.now() - startedAt);
  }, 50);
}

function drawEntry() {
  if (deck.length === 0) {
    deck = shuffle(activeWords());
    if (deck.length > 1 && deck[deck.length - 1].word === lastWord) {
      [deck[0], deck[deck.length - 1]] = [deck[deck.length - 1], deck[0]];
    }
  }
  current = deck.pop();
  lastWord = current.word;
  return current;
}

function buildHints(entry) {
  const list = entry.hints.slice();
  const word = entry.word;
  list.push(`It has ${word.length} letters.`);
  for (let i = 0; i < word.length; i += 1) {
    const place = PLACES[i] || `letter ${i + 1}`;
    list.push(`The ${place} letter is ${word[i].toUpperCase()}.`);
  }
  list.push(`It is spelled ${word.toUpperCase().split("").join(" ")}.`);
  return list;
}

function renderLines() {
  logEl.replaceChildren();
  for (const line of lines) {
    const p = document.createElement("p");
    if (line.type === "guess") {
      p.className = "guess-line";
      p.textContent = `> ${line.text}`;
    } else {
      p.className = "hint-line";
      p.textContent = line.text;
    }
    logEl.appendChild(p);
  }
}

function contentFits() {
  const screenStyle = getComputedStyle(screenEl);
  const padY = parseFloat(screenStyle.paddingTop) + parseFloat(screenStyle.paddingBottom);
  const formStyle = getComputedStyle(formEl);
  const formMargin = parseFloat(formStyle.marginTop) + parseFloat(formStyle.marginBottom);
  const used = logEl.offsetHeight + formEl.offsetHeight + formMargin + padY;
  return used <= screenEl.clientHeight + 2;
}

function showPlay() {
  onImg.hidden = false;
  screenEl.hidden = false;
  logEl.hidden = false;
  formEl.hidden = false;
  winEl.hidden = true;
  overEl.hidden = true;
  computerEl.classList.add("is-on");
  computerEl.tabIndex = -1;
  computerEl.removeAttribute("role");
  computerEl.removeAttribute("aria-label");
  offImg.alt = "";
  setDifficultyEnabled(false);
  resetBtn.disabled = false;
}

function showOff() {
  state = "off";
  current = null;
  hints = [];
  lines = [];
  logEl.replaceChildren();
  onImg.hidden = true;
  screenEl.hidden = true;
  winEl.hidden = true;
  overEl.hidden = true;
  computerEl.classList.remove("is-on");
  computerEl.tabIndex = 0;
  computerEl.setAttribute("role", "button");
  computerEl.setAttribute("aria-label", "Turn on the computer");
  offImg.alt = "Computer turned off";
  captionEl.textContent = "Click the computer to turn it on.";
  inputEl.value = "";
  startedAt = 0;
  stopTimer();
  setDifficultyEnabled(true);
  resetBtn.disabled = true;
}

function powerOn() {
  if (state !== "off") return;
  const entry = drawEntry();
  hints = buildHints(entry);
  hintIndex = 0;
  lines = [{ type: "hint", text: hints[0] }];
  state = "play";
  inputEl.value = "";
  showPlay();
  renderLines();
  startTimer();
  inputEl.focus();
}

function powerOff() {
  showOff();
}

function displayWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function showWin(elapsed) {
  state = "win";
  stopTimer();
  logEl.hidden = true;
  formEl.hidden = true;
  overEl.hidden = true;
  winEl.hidden = false;
  winWordEl.textContent = displayWord(current.word);
  const result = recordScore(elapsed);
  const modeName = result.mode === "hard" ? "Hard" : "Easy";
  winTimeEl.textContent = result.improved
    ? `${formatClock(elapsed)} · ${placeLabel(result.rank)}`
    : `${formatClock(elapsed)} · best ${formatClock(result.best)}`;
  winBoardLabelEl.textContent = modeName;
  winBoardEl.setAttribute("aria-label", `${modeName} leaderboard`);
  renderBoard(result.list, result.name);
  captionEl.textContent = "You guessed the word.";
  resetBtn.disabled = false;
  continueBtn.focus();
}

function showGameOver() {
  state = "over";
  stopTimer();
  logEl.hidden = true;
  formEl.hidden = true;
  winEl.hidden = true;
  overEl.hidden = false;
  overWordEl.textContent = displayWord(current.word);
  captionEl.textContent = "Game over.";
  resetBtn.disabled = false;
  overContinueBtn.focus();
}

function nextHintText() {
  hintIndex += 1;
  return hints[Math.min(hintIndex, hints.length - 1)];
}

function handleGuess(raw) {
  if (state !== "play") return;
  const guess = raw.trim();
  if (!normalize(guess)) return;

  if (normalize(guess) === current.word) {
    showWin(performance.now() - startedAt);
    return;
  }

  lines.push({ type: "guess", text: guess });
  const hint = nextHintText();
  renderLines();

  if (!contentFits()) {
    showGameOver();
    return;
  }

  lines.push({ type: "hint", text: hint });
  renderLines();

  if (!contentFits()) showGameOver();
}

computerEl.addEventListener("click", () => {
  if (state === "off") powerOn();
});

computerEl.addEventListener("keydown", (event) => {
  if (state !== "off") return;
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    powerOn();
  }
});

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const guess = inputEl.value;
  inputEl.value = "";
  handleGuess(guess);
  if (state === "play") inputEl.focus();
});

function onContinue(event) {
  event.stopPropagation();
  const fromKeyboard = event.detail === 0;
  powerOff();
  if (fromKeyboard) computerEl.focus();
}

continueBtn.addEventListener("click", onContinue);
overContinueBtn.addEventListener("click", onContinue);
resetBtn.addEventListener("click", onContinue);
easyBtn.addEventListener("click", () => setDifficulty("easy"));
hardBtn.addEventListener("click", () => setDifficulty("hard"));

try {
  nameEl.value = localStorage.getItem(NAME_KEY) || "";
} catch {
  /* A missing saved name just leaves the field blank. */
}
nameEl.addEventListener("input", () => {
  try {
    localStorage.setItem(NAME_KEY, nameEl.value.slice(0, 16));
  } catch {
    /* The name still applies to this visit. */
  }
});

screenEl.addEventListener("pointerdown", (event) => {
  if (state !== "play" || event.target === inputEl) return;
  inputEl.focus();
});
