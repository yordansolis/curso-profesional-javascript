import "./index.css";
import { TwitterCard } from "./TweitterCard";
export function App() {
  const users = [
    {
      userName: "kikobeats",
      initialIsFollowing: true,
    },
    {
      userName: "midudev",
      initialIsFollowing: false,
    },
  ];
  return (
    <section>
      {users.map((user) => (
        <TwitterCard
          key={user.userName}
          userName={user.userName}
          initialIsFollowing={user.initialIsFollowing}
        >
          {user.userName}
        </TwitterCard>
      ))}
    </section>
  );
}
