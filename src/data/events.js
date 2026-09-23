const events = [
  {
    id: 1,
    name: "Birthday Party",
    date: "2026-10-12",
    createdAt: "2026-09-05T10:30:00",
    budget: 800,
    spent: 620,

    tasks: {
      total: 8,
      completed: 6,
      items: [
        {
          id: 1,
          title: "Choose venue",
          completed: true,
          category: "Venue",
        },
        {
          id: 2,
          title: "Send invitations",
          completed: true,
          category: "Guests",
        },
        {
          id: 3,
          title: "Order birthday cake",
          completed: true,
          category: "Food",
        },
        {
          id: 4,
          title: "Book photographer",
          completed: true,
          category: "Photography",
        },
        {
          id: 5,
          title: "Buy decorations",
          completed: true,
          category: "Decorations",
        },
        {
          id: 6,
          title: "Confirm catering",
          completed: true,
          category: "Food",
        },
        {
          id: 7,
          title: "Arrange music",
          completed: false,
          category: "Entertainment",
        },
        {
          id: 8,
          title: "Prepare party favors",
          completed: false,
          category: "Decorations",
        },
      ],
    },

    categories: [
      "Venue",
      "Food",
      "Decorations",
      "Photography",
      "Entertainment",
      "Guests",
    ],

    expenses: [
      {
        id: 1,
        description: "Venue booking",
        category: "Venue",
        amount: 200,
      },
      {
        id: 2,
        description: "Birthday cake",
        category: "Food",
        amount: 120,
      },
      {
        id: 3,
        description: "Catering deposit",
        category: "Food",
        amount: 150,
      },
      {
        id: 4,
        description: "Decorations",
        category: "Decorations",
        amount: 80,
      },
      {
        id: 5,
        description: "Photographer deposit",
        category: "Photography",
        amount: 70,
      },
    ],
  },

  {
    id: 2,
    name: "Weekend Trip",
    date: "2026-11-05",
    createdAt: "2026-09-08T16:15:00",
    budget: 1500,
    spent: 900,

    tasks: {
      total: 10,
      completed: 4,
      items: [
        {
          id: 1,
          title: "Choose destination",
          completed: true,
          category: "Planning",
        },
        {
          id: 2,
          title: "Book accommodation",
          completed: true,
          category: "Accommodation",
        },
        {
          id: 3,
          title: "Book transportation",
          completed: true,
          category: "Transport",
        },
        {
          id: 4,
          title: "Create itinerary",
          completed: true,
          category: "Planning",
        },
        {
          id: 5,
          title: "Research restaurants",
          completed: false,
          category: "Food",
        },
        {
          id: 6,
          title: "Plan activities",
          completed: false,
          category: "Activities",
        },
        {
          id: 7,
          title: "Pack travel essentials",
          completed: false,
          category: "Packing",
        },
        {
          id: 8,
          title: "Check travel documents",
          completed: false,
          category: "Documents",
        },
        {
          id: 9,
          title: "Prepare emergency funds",
          completed: false,
          category: "Finance",
        },
        {
          id: 10,
          title: "Confirm accommodation",
          completed: false,
          category: "Accommodation",
        },
      ],
    },

    categories: [
      "Accommodation",
      "Transport",
      "Food",
      "Activities",
      "Packing",
      "Documents",
      "Finance",
    ],

    expenses: [
      {
        id: 1,
        description: "Hotel deposit",
        category: "Accommodation",
        amount: 350,
      },
      {
        id: 2,
        description: "Bus tickets",
        category: "Transport",
        amount: 180,
      },
      {
        id: 3,
        description: "Travel insurance",
        category: "Finance",
        amount: 70,
      },
      {
        id: 4,
        description: "Activity booking",
        category: "Activities",
        amount: 150,
      },
      {
        id: 5,
        description: "Restaurant reservation",
        category: "Food",
        amount: 150,
      },
    ],
  },

  {
    id: 3,
    name: "Graduation Celebration",
    date: "2026-12-18",
    createdAt: "2026-09-12T09:20:00",
    budget: 2500,
    spent: 300,

    tasks: {
      total: 12,
      completed: 2,
      items: [
        {
          id: 1,
          title: "Choose celebration venue",
          completed: true,
          category: "Venue",
        },
        {
          id: 2,
          title: "Create guest list",
          completed: true,
          category: "Guests",
        },
        {
          id: 3,
          title: "Send invitations",
          completed: false,
          category: "Guests",
        },
        {
          id: 4,
          title: "Book catering",
          completed: false,
          category: "Food",
        },
        {
          id: 5,
          title: "Order graduation cake",
          completed: false,
          category: "Food",
        },
        {
          id: 6,
          title: "Choose decorations",
          completed: false,
          category: "Decorations",
        },
        {
          id: 7,
          title: "Book photographer",
          completed: false,
          category: "Photography",
        },
        {
          id: 8,
          title: "Arrange music",
          completed: false,
          category: "Entertainment",
        },
        {
          id: 9,
          title: "Choose outfits",
          completed: false,
          category: "Personal",
        },
        {
          id: 10,
          title: "Prepare speech",
          completed: false,
          category: "Personal",
        },
        {
          id: 11,
          title: "Confirm guest attendance",
          completed: false,
          category: "Guests",
        },
        {
          id: 12,
          title: "Finalize event schedule",
          completed: false,
          category: "Planning",
        },
      ],
    },

    categories: [
      "Venue",
      "Food",
      "Decorations",
      "Photography",
      "Entertainment",
      "Guests",
      "Personal",
      "Planning",
    ],

    expenses: [
      {
        id: 1,
        description: "Venue deposit",
        category: "Venue",
        amount: 200,
      },
      {
        id: 2,
        description: "Invitation printing",
        category: "Guests",
        amount: 100,
      },
    ],
  },

  {
    id: 4,
    name: "Family Reunion",
    date: "2026-10-24",
    createdAt: "2026-09-14T13:45:00",
    budget: 1800,
    spent: 1950,

    tasks: {
      total: 15,
      completed: 12,
      items: [
        {
          id: 1,
          title: "Create guest list",
          completed: true,
          category: "Guests",
        },
        {
          id: 2,
          title: "Book venue",
          completed: true,
          category: "Venue",
        },
        {
          id: 3,
          title: "Send invitations",
          completed: true,
          category: "Guests",
        },
        {
          id: 4,
          title: "Arrange catering",
          completed: true,
          category: "Food",
        },
        {
          id: 5,
          title: "Order drinks",
          completed: true,
          category: "Food",
        },
        {
          id: 6,
          title: "Buy decorations",
          completed: true,
          category: "Decorations",
        },
        {
          id: 7,
          title: "Arrange chairs",
          completed: true,
          category: "Venue",
        },
        {
          id: 8,
          title: "Arrange tables",
          completed: true,
          category: "Venue",
        },
        {
          id: 9,
          title: "Book sound system",
          completed: true,
          category: "Entertainment",
        },
        {
          id: 10,
          title: "Prepare family games",
          completed: true,
          category: "Activities",
        },
        {
          id: 11,
          title: "Confirm catering",
          completed: true,
          category: "Food",
        },
        {
          id: 12,
          title: "Confirm guest attendance",
          completed: true,
          category: "Guests",
        },
        {
          id: 13,
          title: "Prepare name tags",
          completed: false,
          category: "Guests",
        },
        {
          id: 14,
          title: "Prepare family slideshow",
          completed: false,
          category: "Entertainment",
        },
        {
          id: 15,
          title: "Final venue inspection",
          completed: false,
          category: "Venue",
        },
      ],
    },

    categories: [
      "Venue",
      "Food",
      "Guests",
      "Decorations",
      "Entertainment",
      "Activities",
    ],

    expenses: [
      {
        id: 1,
        description: "Venue rental",
        category: "Venue",
        amount: 500,
      },
      {
        id: 2,
        description: "Catering",
        category: "Food",
        amount: 700,
      },
      {
        id: 3,
        description: "Drinks",
        category: "Food",
        amount: 250,
      },
      {
        id: 4,
        description: "Sound system",
        category: "Entertainment",
        amount: 200,
      },
      {
        id: 5,
        description: "Decorations",
        category: "Decorations",
        amount: 300,
      },
    ],
  },

  {
    id: 5,
    name: "Beach Day",
    date: "2026-09-28",
    createdAt: "2026-09-16T11:10:00",
    budget: 600,
    spent: 420,

    tasks: {
      total: 7,
      completed: 7,
      items: [
        {
          id: 1,
          title: "Choose beach",
          completed: true,
          category: "Planning",
        },
        {
          id: 2,
          title: "Arrange transportation",
          completed: true,
          category: "Transport",
        },
        {
          id: 3,
          title: "Buy food and drinks",
          completed: true,
          category: "Food",
        },
        {
          id: 4,
          title: "Prepare beach equipment",
          completed: true,
          category: "Equipment",
        },
        {
          id: 5,
          title: "Confirm attendees",
          completed: true,
          category: "Guests",
        },
        {
          id: 6,
          title: "Prepare music",
          completed: true,
          category: "Entertainment",
        },
        {
          id: 7,
          title: "Check weather forecast",
          completed: true,
          category: "Planning",
        },
      ],
    },

    categories: [
      "Transport",
      "Food",
      "Equipment",
      "Guests",
      "Entertainment",
      "Planning",
    ],

    expenses: [
      {
        id: 1,
        description: "Transportation",
        category: "Transport",
        amount: 150,
      },
      {
        id: 2,
        description: "Food and drinks",
        category: "Food",
        amount: 180,
      },
      {
        id: 3,
        description: "Beach equipment",
        category: "Equipment",
        amount: 90,
      },
    ],
  },

  {
    id: 6,
    name: "Christmas Dinner",
    date: "2026-12-25",
    createdAt: "2026-09-18T18:30:00",
    budget: 1200,
    spent: 0,

    tasks: {
      total: 9,
      completed: 0,
      items: [
        {
          id: 1,
          title: "Create guest list",
          completed: false,
          category: "Guests",
        },
        {
          id: 2,
          title: "Choose venue",
          completed: false,
          category: "Venue",
        },
        {
          id: 3,
          title: "Plan menu",
          completed: false,
          category: "Food",
        },
        {
          id: 4,
          title: "Buy ingredients",
          completed: false,
          category: "Food",
        },
        {
          id: 5,
          title: "Send invitations",
          completed: false,
          category: "Guests",
        },
        {
          id: 6,
          title: "Buy decorations",
          completed: false,
          category: "Decorations",
        },
        {
          id: 7,
          title: "Prepare seating arrangement",
          completed: false,
          category: "Venue",
        },
        {
          id: 8,
          title: "Create music playlist",
          completed: false,
          category: "Entertainment",
        },
        {
          id: 9,
          title: "Confirm guests",
          completed: false,
          category: "Guests",
        },
      ],
    },

    categories: ["Venue", "Food", "Guests", "Decorations", "Entertainment"],

    expenses: [],
  },

  {
    id: 7,
    name: "New Year Celebration",
    date: "2027-01-01",
    createdAt: "2026-09-20T12:00:00",
    budget: 2200,
    spent: 1100,

    tasks: {
      total: 14,
      completed: 7,
      items: [
        {
          id: 1,
          title: "Choose venue",
          completed: true,
          category: "Venue",
        },
        {
          id: 2,
          title: "Book venue",
          completed: true,
          category: "Venue",
        },
        {
          id: 3,
          title: "Create guest list",
          completed: true,
          category: "Guests",
        },
        {
          id: 4,
          title: "Send invitations",
          completed: true,
          category: "Guests",
        },
        {
          id: 5,
          title: "Book DJ",
          completed: true,
          category: "Entertainment",
        },
        {
          id: 6,
          title: "Choose menu",
          completed: true,
          category: "Food",
        },
        {
          id: 7,
          title: "Book catering",
          completed: true,
          category: "Food",
        },
        {
          id: 8,
          title: "Order drinks",
          completed: false,
          category: "Food",
        },
        {
          id: 9,
          title: "Buy decorations",
          completed: false,
          category: "Decorations",
        },
        {
          id: 10,
          title: "Arrange transportation",
          completed: false,
          category: "Transport",
        },
        {
          id: 11,
          title: "Prepare playlist",
          completed: false,
          category: "Entertainment",
        },
        {
          id: 12,
          title: "Confirm guests",
          completed: false,
          category: "Guests",
        },
        {
          id: 13,
          title: "Prepare event schedule",
          completed: false,
          category: "Planning",
        },
        {
          id: 14,
          title: "Final venue inspection",
          completed: false,
          category: "Venue",
        },
      ],
    },

    categories: [
      "Venue",
      "Guests",
      "Entertainment",
      "Food",
      "Decorations",
      "Transport",
      "Planning",
    ],

    expenses: [
      {
        id: 1,
        description: "Venue booking",
        category: "Venue",
        amount: 500,
      },
      {
        id: 2,
        description: "DJ deposit",
        category: "Entertainment",
        amount: 250,
      },
      {
        id: 3,
        description: "Catering deposit",
        category: "Food",
        amount: 350,
      },
    ],
  },

  {
    id: 8,
    name: "Housewarming Party",
    date: "2026-11-21",
    createdAt: "2026-09-21T15:40:00",
    budget: 1000,
    spent: 760,

    tasks: {
      total: 11,
      completed: 5,
      items: [
        {
          id: 1,
          title: "Create guest list",
          completed: true,
          category: "Guests",
        },
        {
          id: 2,
          title: "Send invitations",
          completed: true,
          category: "Guests",
        },
        {
          id: 3,
          title: "Plan menu",
          completed: true,
          category: "Food",
        },
        {
          id: 4,
          title: "Buy drinks",
          completed: true,
          category: "Food",
        },
        {
          id: 5,
          title: "Choose decorations",
          completed: true,
          category: "Decorations",
        },
        {
          id: 6,
          title: "Order food",
          completed: false,
          category: "Food",
        },
        {
          id: 7,
          title: "Arrange seating",
          completed: false,
          category: "Venue",
        },
        {
          id: 8,
          title: "Prepare music",
          completed: false,
          category: "Entertainment",
        },
        {
          id: 9,
          title: "Clean and organize house",
          completed: false,
          category: "Preparation",
        },
        {
          id: 10,
          title: "Prepare guest bathroom",
          completed: false,
          category: "Preparation",
        },
        {
          id: 11,
          title: "Confirm guests",
          completed: false,
          category: "Guests",
        },
      ],
    },

    categories: [
      "Guests",
      "Food",
      "Decorations",
      "Venue",
      "Entertainment",
      "Preparation",
    ],

    expenses: [
      {
        id: 1,
        description: "Furniture rental",
        category: "Venue",
        amount: 250,
      },
      {
        id: 2,
        description: "Food",
        category: "Food",
        amount: 280,
      },
      {
        id: 3,
        description: "Drinks",
        category: "Food",
        amount: 130,
      },
      {
        id: 4,
        description: "Decorations",
        category: "Decorations",
        amount: 100,
      },
    ],
  },

  {
    id: 9,
    name: "Team Dinner",
    date: "2026-09-12",
    createdAt: "2026-08-28T19:20:00",
    budget: 700,
    spent: 700,

    tasks: {
      total: 6,
      completed: 6,
      items: [
        {
          id: 1,
          title: "Choose restaurant",
          completed: true,
          category: "Venue",
        },
        {
          id: 2,
          title: "Confirm attendees",
          completed: true,
          category: "Guests",
        },
        {
          id: 3,
          title: "Make reservation",
          completed: true,
          category: "Venue",
        },
        {
          id: 4,
          title: "Confirm menu",
          completed: true,
          category: "Food",
        },
        {
          id: 5,
          title: "Arrange transportation",
          completed: true,
          category: "Transport",
        },
        {
          id: 6,
          title: "Send dinner details",
          completed: true,
          category: "Guests",
        },
      ],
    },

    categories: ["Venue", "Guests", "Food", "Transport"],

    expenses: [
      {
        id: 1,
        description: "Restaurant deposit",
        category: "Venue",
        amount: 200,
      },
      {
        id: 2,
        description: "Dinner",
        category: "Food",
        amount: 350,
      },
      {
        id: 3,
        description: "Transportation",
        category: "Transport",
        amount: 150,
      },
    ],
  },

  {
    id: 10,
    name: "Study Group Meetup",
    date: "2026-09-19",
    createdAt: "2026-09-01T08:45:00",
    budget: 350,
    spent: 280,

    tasks: {
      total: 7,
      completed: 5,
      items: [
        {
          id: 1,
          title: "Choose meeting location",
          completed: true,
          category: "Venue",
        },
        {
          id: 2,
          title: "Confirm group members",
          completed: true,
          category: "Guests",
        },
        {
          id: 3,
          title: "Prepare study materials",
          completed: true,
          category: "Preparation",
        },
        {
          id: 4,
          title: "Arrange refreshments",
          completed: true,
          category: "Food",
        },
        {
          id: 5,
          title: "Share meeting schedule",
          completed: true,
          category: "Planning",
        },
        {
          id: 6,
          title: "Prepare discussion topics",
          completed: false,
          category: "Planning",
        },
        {
          id: 7,
          title: "Confirm final attendance",
          completed: false,
          category: "Guests",
        },
      ],
    },

    categories: ["Venue", "Guests", "Preparation", "Food", "Planning"],

    expenses: [
      {
        id: 1,
        description: "Meeting room",
        category: "Venue",
        amount: 150,
      },
      {
        id: 2,
        description: "Refreshments",
        category: "Food",
        amount: 80,
      },
      {
        id: 3,
        description: "Printing",
        category: "Preparation",
        amount: 50,
      },
    ],
  },

  {
    id: 11,
    name: "Charity Fundraiser",
    date: "2026-10-31",
    createdAt: "2026-09-22T10:15:00",
    budget: 3000,
    spent: 950,

    tasks: {
      total: 13,
      completed: 4,
      items: [
        {
          id: 1,
          title: "Choose venue",
          completed: true,
          category: "Venue",
        },
        {
          id: 2,
          title: "Set fundraising goal",
          completed: true,
          category: "Planning",
        },
        {
          id: 3,
          title: "Create guest list",
          completed: true,
          category: "Guests",
        },
        {
          id: 4,
          title: "Create promotional materials",
          completed: true,
          category: "Promotion",
        },
        {
          id: 5,
          title: "Contact sponsors",
          completed: false,
          category: "Sponsors",
        },
        {
          id: 6,
          title: "Arrange catering",
          completed: false,
          category: "Food",
        },
        {
          id: 7,
          title: "Book sound system",
          completed: false,
          category: "Entertainment",
        },
        {
          id: 8,
          title: "Arrange decorations",
          completed: false,
          category: "Decorations",
        },
        {
          id: 9,
          title: "Prepare donation materials",
          completed: false,
          category: "Fundraising",
        },
        {
          id: 10,
          title: "Confirm volunteers",
          completed: false,
          category: "Volunteers",
        },
        {
          id: 11,
          title: "Publish event details",
          completed: false,
          category: "Promotion",
        },
        {
          id: 12,
          title: "Prepare event schedule",
          completed: false,
          category: "Planning",
        },
        {
          id: 13,
          title: "Final venue inspection",
          completed: false,
          category: "Venue",
        },
      ],
    },

    categories: [
      "Venue",
      "Planning",
      "Guests",
      "Promotion",
      "Sponsors",
      "Food",
      "Entertainment",
      "Decorations",
      "Fundraising",
      "Volunteers",
    ],

    expenses: [
      {
        id: 1,
        description: "Venue deposit",
        category: "Venue",
        amount: 500,
      },
      {
        id: 2,
        description: "Promotional materials",
        category: "Promotion",
        amount: 200,
      },
      {
        id: 3,
        description: "Sound system deposit",
        category: "Entertainment",
        amount: 150,
      },
      {
        id: 4,
        description: "Printing",
        category: "Promotion",
        amount: 100,
      },
    ],
  },

  {
    id: 12,
    name: "Friends Game Night",
    date: "2026-09-06",
    createdAt: "2026-08-20T17:50:00",
    budget: 450,
    spent: 430,

    tasks: {
      total: 8,
      completed: 8,
      items: [
        {
          id: 1,
          title: "Choose venue",
          completed: true,
          category: "Venue",
        },
        {
          id: 2,
          title: "Confirm guests",
          completed: true,
          category: "Guests",
        },
        {
          id: 3,
          title: "Choose games",
          completed: true,
          category: "Entertainment",
        },
        {
          id: 4,
          title: "Buy snacks",
          completed: true,
          category: "Food",
        },
        {
          id: 5,
          title: "Buy drinks",
          completed: true,
          category: "Food",
        },
        {
          id: 6,
          title: "Prepare seating",
          completed: true,
          category: "Venue",
        },
        {
          id: 7,
          title: "Prepare music",
          completed: true,
          category: "Entertainment",
        },
        {
          id: 8,
          title: "Clean up",
          completed: true,
          category: "Preparation",
        },
      ],
    },

    categories: ["Venue", "Guests", "Entertainment", "Food", "Preparation"],

    expenses: [
      {
        id: 1,
        description: "Venue rental",
        category: "Venue",
        amount: 200,
      },
      {
        id: 2,
        description: "Snacks",
        category: "Food",
        amount: 100,
      },
      {
        id: 3,
        description: "Drinks",
        category: "Food",
        amount: 80,
      },
      {
        id: 4,
        description: "Games",
        category: "Entertainment",
        amount: 50,
      },
    ],
  },
];

export default events;
