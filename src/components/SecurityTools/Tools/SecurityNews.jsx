import { useState, useEffect } from "react";
import "../Tools.css";

function SecurityNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSecurityNews = async () => {
      try {
        try {
          const response = await fetch(
            "https://api.rss2json.com/v1/api.json?rss_url=https://feeds.feedburner.com/TheHackersNews"
          );

          if (response.ok) {
            const data = await response.json();
            if (data.items && data.items.length > 0) {
              // Format news data
              const formattedNews = data.items.slice(0, 3).map((item) => ({
                date: new Date(item.pubDate).toLocaleDateString(),
                title: item.title,
                description: item.description.replace(/<[^>]*>?/gm, "").substring(0, 150) + "...",
                link: item.link,
                thumbnail: item.thumbnail || "/placeholder.svg?height=80&width=80",
              }));

              setNews(formattedNews);
              setLoading(false);
              return;
            }
          }
          throw new Error("API failed");
        } catch (error) {
          // Fallback to simulated data
          console.error("Failed to fetch security news:", error);
          setNews([
            {
              date: "April 15, 2025",
              title: "Critical Windows Vulnerability Discovered",
              description:
                "Security researchers have identified a zero-day vulnerability affecting Windows systems. The exploit allows attackers to gain system-level privileges.",
              link: "/news/windows-vulnerability",
              thumbnail: "/placeholder.svg?height=80&width=80",
            },
            {
              date: "April 12, 2025",
              title: "New Phishing Campaign Targets Banking Users",
              description:
                "A sophisticated phishing operation is underway, using fake bank emails to steal credentials and financial information from unsuspecting victims.",
              link: "/news/banking-phishing",
              thumbnail: "/placeholder.svg?height=80&width=80",
            },
            {
              date: "April 10, 2025",
              title: "Major Data Breach Affects 1.5M Users",
              description:
                "A popular online service has disclosed a data breach affecting approximately 1.5 million user accounts. The stolen data includes emails and hashed passwords.",
              link: "/news/major-data-breach",
              thumbnail: "/placeholder.svg?height=80&width=80",
            },
          ]);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchSecurityNews();
  }, []);

  return (
    <div className="sec-tool-page">
      <div className="sec-tool-page-container">
        

        <div className="sec-tool-page-header">
          <h1 className="sec-tool-page-title">Security News</h1>
          <p className="sec-tool-page-subtitle">Latest cybersecurity news and updates</p>
        </div>

        <div className="sec-tool-page-content">
          {loading ? (
            <div className="sec-tool-loading">
              <div className="sec-tool-spinner"></div>
              <p>Loading security news...</p>
            </div>
          ) : (
            <div className="sec-tool-news-grid">
              {news.map((item, index) => (
                <div className="sec-tool-news-card" key={index}>
                  <div className="sec-tool-news-content">
                    <div className="sec-tool-news-date">{item.date}</div>
                    <h3 className="sec-tool-news-title">{item.title}</h3>
                    <p className="sec-tool-news-description">{item.description}</p>
                    <a href={item.link} className="sec-tool-news-link">
                      Read Full Article
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default SecurityNews;