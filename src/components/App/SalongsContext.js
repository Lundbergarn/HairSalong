import React from 'react';

const SalongsContext = React.createContext({});

export const SalongsProvider = SalongsContext.Provider;
export const SalongsConsumer = SalongsContext.Consumer;
export default SalongsContext;