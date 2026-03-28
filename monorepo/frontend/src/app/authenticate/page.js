'use client';
import { useState, useEffect } from 'react';
import { signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth, googleProvider } from '../../../lib/firebaseconfig';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../globals.css";

const AuthForm = ({ 
  showSignUpOverlay = true, 
  showSignInOverlay = true,
  customFont = 'Poppins'
}) => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [isMobileSignUp, setIsMobileSignUp] = useState(false);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasJustSignedUp, setHasJustSignedUp] = useState(false);
  const router = useRouter();

  // Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      toast.success('Signed in with Google successfully!');
      router.push('/profile');
    } catch (error) {
      console.error('Google Sign-in error:', error);
      toast.error('Google Sign-in failed.');
    }
  };

  // Modify Email Sign-Up function
  const handleEmailSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      toast.success('Account created successfully!');

      if (!user.displayName) {
        await updateProfile(user, {
          displayName: 'Default Name',  // Default name, or prompt user to set this
          photoURL: 'https://example.com/default-profile.jpg' // Default photo, or prompt user to set this
        });
      }
      
      // Sign out immediately after account creation
      await signOut(auth);
      
      // Set the panel to show the sign-in form
      setIsRightPanelActive(false); 
      
      // Optionally clear the email and password fields
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Sign-up error:', error);
      // Check if error is due to email already in use
    if (error.code === 'auth/email-already-in-use') {
      toast.error('Email already in use. Please use a different email or sign in.');
    } else {
      toast.error('Sign-up failed. Please try again.');
    }
    }
  };


  // Email Password Reset
  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset link sent to your email!');
    } catch (error) {
      console.error('Password reset error:', error);
      toast.error('Failed to send password reset link. Please check the email address.');
    }
  };

  // Email Sign-In
  const handleEmailSignIn = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      toast.success('Signed in successfully!');
      router.push('/profile');
    } catch (error) {
      console.error('Sign-in error:', error);
      toast.error('Sign-in failed. Please check your credentials.');
    }
  };

  // Sign-Out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      toast.info('Signed out successfully!');
    } catch (error) {
      console.error('Sign-out error:', error);
      toast.error('Sign-out failed. Please try again.');
    }
  };

 // Inside AuthForm component
useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    setUser(user);

    // Only redirect to profile if not just signed up and the user is authenticated
    if (user && !hasJustSignedUp && !isRightPanelActive) {
      router.push('/profile');
    }

    // If just signed up, keep the user on the sign-in form
    if (hasJustSignedUp && !isRightPanelActive) {
      
      setHasJustSignedUp(false); // Reset after showing the sign-in form
    }
  });
  return () => unsubscribe();
}, [router, hasJustSignedUp, isRightPanelActive]);


const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
  }
};

  return (
    <>
      <link
        href={`https://fonts.googleapis.com/css2?family=${customFont.replace(' ', '+')}:wght@400;600;700&display=swap`}
        rel="stylesheet"
      />

      <div className={`min-h-screen flex flex-col items-center justify-center bg-[#f6f5f7] px-4 font-[${customFont}]`}>
        <button 
          className="md:hidden mb-4 rounded-[20px] border border-[#FF4B2B] bg-[#FF4B2B] text-white text-xs font-bold py-3 px-11 uppercase tracking-wider transition-transform duration-80 ease-in hover:opacity-90"
          onClick={() => setIsMobileSignUp(!isMobileSignUp)}
        >
          Switch to {isMobileSignUp ? 'Sign In' : 'Sign Up'}
        </button>

        <div className={`bg-white rounded-[10px] shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)] relative overflow-hidden w-full max-w-[768px] min-h-[480px] ${isRightPanelActive ? 'right-panel-active' : ''}`}>
          
          {/* Sign Up Container */}
          <div className={`absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-full md:w-1/2 ${isRightPanelActive || isMobileSignUp ? 'opacity-100 z-10 translate-x-0 md:translate-x-full' : 'opacity-0 z-0'}`}>
            <form onSubmit={(e) => e.preventDefault()} onKeyDown={handleKeyDown} className="bg-white flex items-center justify-center flex-col px-6 md:px-12 h-full text-center">
              <h1 className="font-bold text-2xl mb-4">Create Account</h1>
              <div className="my-5 flex gap-4">
                <button onClick={handleGoogleSignIn} className="border border-[#DDDDDD] rounded-full inline-flex justify-center items-center h-10 w-10 hover:bg-gray-50 transition-colors">
                  <img src="https://res.cloudinary.com/domzgxu5n/image/upload/v1731131233/dgjxeu7e6c9dasfdhvjn.svg" alt="Google Logo" className="h-6 w-6" />
                </button>
              </div>
              <span className="text-xs mb-4">or use your email for registration</span>
              <input type="text" placeholder="Name" className="bg-[#eee] border-none rounded-lg p-3 my-2 w-full" />
              <input type="email" placeholder="Email" className="bg-[#eee] border-none rounded-lg p-3 my-2 w-full" onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder="Password" className="bg-[#eee] border-none rounded-lg p-3 my-2 w-full" onChange={(e) => setPassword(e.target.value)} />
              <button onClick={handleEmailSignUp} className="mt-4 rounded-[20px] border border-[#FF4B2B] bg-[#FF4B2B] text-white text-xs font-bold py-3 px-11 uppercase tracking-wider">
                Sign Up
              </button>
            </form>
          </div>

          {/* Sign In Container */}
          <div className={`absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-full md:w-1/2 ${isRightPanelActive || isMobileSignUp ? 'opacity-0 z-0 md:translate-x-full' : 'opacity-100 z-10'}`}>
            <form onSubmit={(e) => e.preventDefault()} onKeyDown={handleKeyDown} className="bg-white flex items-center justify-center flex-col px-6 md:px-12 h-full text-center">
              <h1 className="font-bold text-2xl mb-4">Sign in</h1>
              <div className="my-5 flex gap-4">
                <button onClick={handleGoogleSignIn} className="border border-[#DDDDDD] rounded-full inline-flex justify-center items-center h-10 w-10 hover:bg-gray-50 transition-colors">
                  <img src="https://res.cloudinary.com/domzgxu5n/image/upload/v1731131233/dgjxeu7e6c9dasfdhvjn.svg" alt="Google Logo" className="h-6 w-6" />
                </button>
              </div>
              <span className="text-xs mb-4">or use your account</span>
              <input type="email" placeholder="Email" className="bg-[#eee] border-none rounded-lg p-3 my-2 w-full" onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder="Password" className="bg-[#eee] border-none rounded-lg p-3 my-2 w-full" onChange={(e) => setPassword(e.target.value)} />
              <a href="#" className="text-sm text-[#333] no-underline my-4 hover:text-[#FF4B2B]" onClick={handlePasswordReset}>Forgot your password?</a>
              <button onClick={handleEmailSignIn} className="rounded-[20px] border border-[#FF4B2B] bg-[#FF4B2B] text-white text-xs font-bold py-3 px-11 uppercase tracking-wider">
                Sign In
              </button>
              
              {/* Link to toggle to Sign Up */}
              <p className="mt-4 text-xs">
                Haven&#39;t registered yet?{' '}
                <span onClick={() => setIsRightPanelActive(true)} className="text-[#FF4B2B] cursor-pointer font-semibold hover:underline">
                  Sign up
                </span>
              </p>
            </form>
          </div>

          {/* Overlay Container */}
          <div className={`hidden md:block absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600 ease-in-out z-20 ${isRightPanelActive ? '-translate-x-full' : ''}`}>
            <div className={`bg-gradient-to-r from-[#FF4B2B] to-[#FF416C] text-white relative -left-full h-full w-[200%] transform transition-transform duration-600 ease-in-out ${isRightPanelActive ? 'translate-x-1/2' : 'translate-x-0'}`}>
              <div className={`absolute top-0 left-0 flex items-center justify-center flex-col w-1/2 h-full px-12 text-center ${isRightPanelActive ? 'translate-x-0' : '-translate-x-full'}`}>
                <h1 className="font-bold text-2xl">Welcome Back!</h1>
                <p className="mt-4 mb-6 text-xs">To keep connected with us please login with your personal info</p>
                <button onClick={() => setIsRightPanelActive(false)} className="rounded-[20px] border border-white bg-transparent text-white text-xs font-bold py-3 px-11 uppercase tracking-wider hover:bg-white hover:text-[#FF4B2B]">
                  Sign In
                </button>
              </div>
              <div className={`absolute top-0 left-1/2 flex items-center justify-center flex-col w-1/2 h-full px-12 text-center ${isRightPanelActive ? 'translate-x-full' : 'translate-x-0'}`}>
                <h1 className="font-bold text-2xl">Hello, Friend!</h1>
                <p className="mt-4 mb-6 text-xs">Enter your personal details and start your journey with us</p>
                <button onClick={() => setIsRightPanelActive(true)} className="rounded-[20px] border border-white bg-transparent text-white text-xs font-bold py-3 px-11 uppercase tracking-wider hover:bg-white hover:text-[#ff4b2b]">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
