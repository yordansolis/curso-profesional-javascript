import { useState } from "react";

export function TwitterCard({
  children,
  userName = "kikobeats",
  initialIsFollowing,
}) {
  const [isFollow, setIsFollowing] = useState(false);
  // isFollow =  0 = 'siguiendo'
  const text = isFollow ? "Siguiendo" : "Seguir";

  const buttonClassName = isFollow
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  //showText = 0  y  setShowText = 1

  const handleClick = () => {
    setIsFollowing(!isFollow);
  };

  return (
    <article className="tw-kikobeats">
      <header className="tw-header">
        <div className="tw-user-info">
          <img
            className="tw-avatar"
            src={`https://unavatar.io/${userName}`}
            alt="kikobeats"
          />
          <div className="tw-user-texts">
            <span>{children}</span> {/**  children */}
            <strong>@{userName}</strong>
            <span>Estoy aprendendo React</span>
          </div>
        </div>
        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            {text}
          </button>
        </aside>
      </header>
    </article>
  );
}
