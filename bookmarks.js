// Note: having length != 4 will mess with layout based on how the site is styled
const bookmarks = [
  {
    title: "Daily",
    links: [
      { name: "YouTube Music", url: "https://music.youtube.com" },
      { name: "YouTube", url: "https://youtube.com" },
      { name: "Gmail", url: "https://mail.google.com" },
    ],
  },
  {
    title: "Media",
    links: [
      { name: "Nyaa.si", url: "https://nyaa.si" },
      { name: "Reddit", url: "https://reddit.com" },
      { name: "Notion", url: "https://notion.so" },
      { name: "Jellyfin", url: "https://jellyfin.catgirls.cyou/" },
    ],
  },
  {
    title: "Social",
    links: [
      { name: "Mastodon", url: "https://equestria.social" },
      { name: "Anilist", url: "https://anilist.co" },
      { name: "Bluesky", url: "https://bsky.app" },
      { name: "Lemmy.ml", url: "https://lemmy.ml" },
    ],
  },
];

function setupBookmarks() {
  const bookmarkContainer = document.getElementById("bookmark-container");
  bookmarkContainer.innerHTML = bookmarks
    .map((b) => {
      const html = ["<div class='bookmark-set'>"];
      html.push(`<div class="bookmark-title">${b.title}</div>`);
      html.push('<div class="bookmark-scroll-hide"><div class="bookmark-inner-container">');
      html.push(
        ...b.links.map(
          (l) =>
            `<a class="bookmark" href="${l.url}" target="_blank">${l.name}</a>`
        )
      );
      html.push("</div></div></div>");
      return html.join("");
    })
    .join("");
}
