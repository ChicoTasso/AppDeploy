// authHelper.js
export const logout = (navigation) => {
    // Limpeza de qualquer dado de sessão (se necessário)
    // Por exemplo, você pode usar AsyncStorage, etc.
    
    // Redireciona para a tela de login
    navigation.replace('Login');
  };
  