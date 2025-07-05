import React, { useState } from "react";
import "../Main.css";

const NewsPage = () => {
  const [category, setCategory] = useState("All");

  const games = [
    { id: 1, title: "Halo Infinite", genre: "Action", studio: "343 Studios", imgSrc: "halo.png", 
        description: "A first-person shooter set in the Halo universe, Halo Infinite follows the journey of Master Chief as he battles the Covenant and other alien forces. This latest installment in the franchise introduces an open-world setting, expansive environments, and a compelling narrative about the struggle for humanity's survival. The game features breathtaking visuals, a new multiplayer mode, and various gameplay enhancements, delivering the most ambitious Halo title yet." },
    { id: 2, title: "Halo MCC", genre: "Action", studio: "343 Studios", imgSrc: "halomcc.png",
         description: "The Halo: Master Chief Collection brings together several classic titles from the Halo franchise, all remastered with updated graphics and enhanced features. Players can enjoy the campaigns and multiplayer modes of Halo: Combat Evolved, Halo 2, Halo 3, Halo 4, and even Halo: Reach. This collection serves as a perfect gateway for newcomers and longtime fans to experience the saga's defining moments, both solo and with friends." },
    { id: 3, title: "Hollow Knight", genre: "Metroidvania", studio: "Team Cherry", imgSrc: "hollow.png",
         description: "Hollow Knight is an atmospheric and challenging Metroidvania platformer set in the ancient, decaying kingdom of Hallownest. As the mysterious protagonist, players explore intricate environments filled with danger, puzzles, and secrets. The game offers tight, responsive combat, platforming challenges, and a rich lore that gradually unravels as you journey deeper into the world, with each discovery adding to the eerie and captivating atmosphere." },
    { id: 4, title: "Dark Souls 3", genre: "Souls Like", studio: "From Software", imgSrc: "darksouls3.png",
         description: " Known for its punishing difficulty, Dark Souls 3 continues the series' legacy of intense, tactical combat, intricate level design, and deep lore. Set in the kingdom of Lothric, players battle nightmarish enemies and towering bosses while exploring interconnected areas that reward patience and strategy. With its complex world-building and punishing difficulty, Dark Souls 3 offers a challenge for gamers who enjoy high-risk, high-reward gameplay." },
    { id: 5, title: "Dead Space Remake", genre: "Horror", studio: "EA", imgSrc: "deadspace.png",
         description: " The Dead Space Remake is a reimagining of the 2008 survival horror classic, staying true to the terrifying atmosphere while enhancing graphics, sound, and gameplay mechanics. The story follows Isaac Clarke, an engineer aboard a mining ship, as he investigates a distress signal and uncovers an alien infestation. The remake builds upon the original's claustrophobic, tense environment with updated visuals and mechanics, making the horror experience even more visceral." },
    { id: 6, title: "Terraria", genre: "Creative", studio: "505 Studios", imgSrc: "terraria.png",
         description: "Terraria is a sandbox game that blends creativity and survival in a pixelated 2D world. Players can dig, build, explore, and fight enemies while customizing their environments with a wide variety of items and materials. With its ever-expanding content, random world generation, and cooperative multiplayer options, Terraria offers endless possibilities for players to craft their dream worlds or venture into the unknown for new adventures." },
    { id: 7, title: "Concord", genre: "Shooter", studio: "Sony Interactive", imgSrc: "concord.png",
         description: "Set in a futuristic world, Concord is a third-person shooter that combines fast-paced combat with tactical elements. Players take control of a highly skilled soldier fighting against an intergalactic threat. The game's stunning visuals and dynamic combat systems bring futuristic weapons, vehicles, and environments to life. Whether fighting solo or with friends in multiplayer modes, Concord offers an intense and action-packed experience." },
    { id: 8, title: "Elden Ring", genre: "Souls Like", studio: "From Software", imgSrc: "eldenring.png",
         description: " From the makers of Dark Souls comes Elden Ring, an open-world RPG set in a vast, mystical world filled with mythical creatures, ancient ruins, and perilous landscapes. Players take on the role of a Tarnished, seeking the shattered Elden Ring to restore their world. The game combines the challenging combat and atmospheric storytelling of Dark Souls with the freedom of exploration and vast open environments, creating a rich and immersive experience." },
    { id: 9, title: "Black Ops 6", genre: "Shooter", studio: "Treyarch", imgSrc: "bo6.png",
         description: "Call of Duty: Black Ops 6 continues the tradition of fast-paced, action-packed first-person shooter gameplay, with a focus on futuristic warfare. Featuring an array of new weapons, gadgets, and explosive combat mechanics, the game's multiplayer mode pushes the limits of modern warfare. Additionally, players can dive into a gripping campaign that challenges them to take down high-tech enemies in high-stakes global operations." },
    { id: 10, title: "Mario Party", genre: "RPG", studio: "Nintendo", imgSrc: "marioparty.png",
         description: "Mario Party is a fun-filled party game that brings together Mario and his friends for a series of wacky mini-games on various boards. Players can compete against one another in a variety of challenges, from simple luck-based games to more skillful activities. The multiplayer mode shines in Mario Party, allowing players to team up and have a great time, with an emphasis on fun, chaos, and friendly competition." },
    { id: 11, title: "Forza Horizon 4", genre: "Racing", studio: "Playground Games", imgSrc: "fh4.png",
         description: "Forza Horizon 4 is an open-world racing game set in a fictionalized version of Britain. The game features dynamic weather and seasons, where each season brings new challenges and opportunities to explore the world. Players can race, complete events, or simply cruise through the beautiful countryside in a wide range of cars. With its stunning graphics, deep customization options, and expansive world, Forza Horizon 4 offers a thrilling driving experience for all types of racing fans." },
    { id: 12, title: "Forza Horizon 5", genre: "Racing", studio: "Playground Games", imgSrc: "fh5.png",
         description: "Set in the vibrant landscapes of Mexico, Forza Horizon 5 takes the open-world racing formula to new heights. With improved graphics, new vehicles, and even more diverse environments, the game offers players the chance to race through deserts, jungles, and cities. The game features dynamic weather, seasonal changes, and a variety of races, making it an unforgettable experience for fans of both racing and exploration." },
    { id: 13, title: "Uncharted 4", genre: "Adventure", studio: "Naughty Dog", imgSrc: "Uncharted4.png",
         description: "Uncharted 4: A Thief's End is an action-adventure game that follows Nathan Drake, a retired treasure hunter, on his final adventure. The game blends platforming, puzzle-solving, and cinematic action sequences as players traverse exotic locations in search of ancient artifacts. With stunning visuals, gripping storytelling, and refined gameplay mechanics, Uncharted 4 is a fitting conclusion to Nathan Drake's saga." },
    { id: 14, title: "God Of War (2016)", genre: "Action", studio: "Santa Monica Studio", imgSrc: "godofwar.png",
         description: "God of War redefines the action-adventure genre by reimagining Kratos as a father figure in a world inspired by Norse mythology. The game's compelling narrative explores Kratos' relationship with his son, Atreus, while engaging players in brutal combat and puzzle-solving. Featuring a seamless, camera-driven storytelling experience and deep character development, God of War (2016) is a must-play for fans of the series and newcomers alike." },
    { id: 15, title: "Bloodborne", genre: "Souls Like", studio: "From Software", imgSrc: "bloodborne.png",
         description: "Bloodborne is a gothic horror action RPG set in the cursed city of Yharnam, where a plague has transformed citizens into terrifying creatures. As a Hunter, players must navigate nightmarish environments, battle monstrous foes, and uncover the secrets of the ancient city. With fast-paced, aggressive combat and an eerie atmosphere, Bloodborne offers an intense and thrilling experience for fans of dark fantasy and challenging gameplay." },
    { id: 16, title: "Sekiro", genre: "Souls Like", studio: "From Software", imgSrc: "sekiro.png",
         description: " Shadows Die Twice takes players into a war-torn feudal Japan, where they control a skilled shinobi named Wolf on a mission of vengeance and rescue. The game emphasizes precision, stealth, and combat, with an innovative posture system and intense boss battles. Unlike previous From Software titles, Sekiro places more emphasis on skill-based action rather than RPG mechanics, creating a tense and rewarding experience for players seeking a challenge." },
  ];

  const filteredGames =
    category === "All"
      ? games
      : games.filter((game) => game.genre === category);

  const categories = ["All", "Action", "Souls Like", "Racing", "Shooter", "Adventure", "RPG", "Metroidvania", "Creative", "Horror"];

  return (
    <div className="news-page">
      {/* Hero Section */}
      <section className="news-hero-section">
        <div className="container">
          <div className="news-hero-content">
            <h1 className="news-hero-title">Gaming News & Updates</h1>
            <p className="news-hero-subtitle">
              Stay updated with the latest gaming news, reviews, and industry insights
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <div className="category-filter-section">
        <div className="container">
          <div className="category-filter">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-btn ${category === cat ? 'active' : ''}`}
                onClick={() => setCategory(cat)}
              >
                <span className="category-icon">
                  {cat === "All" && "🎮"}
                  {cat === "Action" && "⚔️"}
                  {cat === "Souls Like" && "💀"}
                  {cat === "Racing" && "🏎️"}
                  {cat === "Shooter" && "🔫"}
                  {cat === "Adventure" && "🗺️"}
                  {cat === "RPG" && "⚔️"}
                  {cat === "Metroidvania" && "🦋"}
                  {cat === "Creative" && "🎨"}
                  {cat === "Horror" && "👻"}
                </span>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Game Cards */}
      <div className="news-content-section">
        <div className="container">
          <div className="news-grid">
            {filteredGames.map((game, index) => (
              <div
                key={game.id}
                className="news-card slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="news-card-image">
                  <img
                    src={game.imgSrc}
                    alt={game.title}
                    className="news-card-img"
                  />
                  <div className="news-card-overlay">
                    <div className="news-card-genre">{game.genre}</div>
                  </div>
                </div>
                <div className="news-card-content">
                  <h3 className="news-card-title">{game.title}</h3>
                  <p className="news-card-studio">Studio: {game.studio}</p>
                  <p className="news-card-description">{game.description}</p>
                  <div className="news-card-actions">
                    <button className="news-read-more-btn">
                      <span className="btn-icon">📖</span>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredGames.length === 0 && (
            <div className="no-news-results">
              <div className="no-news-icon">📰</div>
              <h3>No news found</h3>
              <p>Try selecting a different category or check back later for updates.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
