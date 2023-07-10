import React, { createContext, useContext, useEffect, useState } from "react";

const initTeam = {
  // ...other team data
  team: [],
};

export const TeamContext = createContext();

const getInitialState = () => {
  const team = localStorage.getItem("team");
  return team ? JSON.parse(team) : initTeam;
};

const TeamContextProvider = (props) => {
  const [team, setTeam] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("team", JSON.stringify(team));
  }, [team]);

  const addPlayer = (player) =>
    setTeam((prev) => ({
      ...prev,
      team: [...prev.team, player],
    }));

  const removePlayer = (playerId) =>
    setTeam((prev) => ({
      ...prev,
      team: prev.team.filter((p) => p.id !== playerId),
    }));

  return (
    <TeamContext.Provider value={{ addPlayer, removePlayer, ...team }}>
      {props.children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => useContext(TeamContext);

export default TeamContextProvider;