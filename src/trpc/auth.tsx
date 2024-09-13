'use client'

export interface AuthSession {
    access_token: string;
    refresh_token: string;
    expires_at: number; // timestamp of when the token expires
}

export const saveSession = (session: AuthSession) => {
    localStorage.setItem('authSession', JSON.stringify(session));
};

export const clearSession = () => {
    localStorage.removeItem('authSession');
  };

export const getSession = (): AuthSession | null => {
    const session = localStorage.getItem('authSession');
    return session ? JSON.parse(session) as AuthSession : null;
};

// const handleAuthStateChange = () => {
//     // This will trigger on initial load if there's an existing session,
//     // and whenever the auth state changes (sign in, sign out, token refresh)
//     supabaseClient.auth.onAuthStateChange((event, session) => {
//       if (event === 'SIGNED_IN') {
//         console.log('User signed in:', session);
//         // Store the session in localStorage or other client storage
//         if (session) {
//           saveSession({
//             access_token: session.access_token,
//             refresh_token: session.refresh_token,
//             expires_at: Date.now() + session.expires_in * 1000,
//           });
//         }
//       } else if (event === 'SIGNED_OUT') {
//         console.log('User signed out');
//         // Clear session on sign out
//         clearSession();
//       } else if (event === 'TOKEN_REFRESHED') {
//         console.log('Token refreshed:', session);
//         // Update the stored session with new tokens
//         if (session) {
//           saveSession({
//             access_token: session.access_token,
//             refresh_token: session.refresh_token,
//             expires_at: Date.now() + session.expires_in * 1000,
//           });
//         }
//       }
//     });
//   };
  