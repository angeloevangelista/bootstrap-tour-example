var tour = new Tour({
  steps: [
    {
      element: "#page-header",
      title: "Header",
      content: "This is a header like.",
    },
    {
      element: "#page-image",
      title: "Preview",
      content:
        "Here You will be able to find some interesting pictures from picsum.photos.",
    },
    {
      element: "#heart",
      title: "The purple 💜",
      content: "Yeah, it's a heart.",
    },
    {
      element: "#github-link",
      title: "Maybe the credits",
      content: "Come on, give me some star on github :P",
    },
  ],
});

// Initialize the tour
tour.init();

// Start the tour
tour.start();
