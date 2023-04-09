import React from 'react';
import GameService from '../services/GameService';

const GameServiceContext = React.createContext<GameService | undefined>(undefined);

export const GameServiceProvider: React.FC<{ gameService: GameService }> = ({ gameService, children }) => {
  return <GameServiceContext.Provider value={gameService}>{children}</GameServiceContext.Provider>;
};

export const useGameService = () => {
  const context = React.useContext(GameServiceContext);
  if (!context) {
    throw new Error('useGameService must be used within a GameServiceProvider');
  }
  return context;
};

export default GameServiceContext;
