import React from 'react';
import ScaleService from '../services/ScaleService';

const ScaleServiceContext = React.createContext<ScaleService | undefined>(undefined);

export const ScaleServiceProvider: React.FC<{ scaleService: ScaleService }> = ({ scaleService, children }) => {
  return <ScaleServiceContext.Provider value={scaleService}>{children}</ScaleServiceContext.Provider>;
};

export const useScaleService = () => {
  const context = React.useContext(ScaleServiceContext);
  if (!context) {
    throw new Error('useScaleService must be used within a ScaleServiceProvider');
  }
  return context;
};

export default ScaleServiceContext;
