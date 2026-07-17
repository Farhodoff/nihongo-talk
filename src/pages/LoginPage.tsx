import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Tizimga kirishga urinish:\nEmail: ${email}`);
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-header">
          <h2>Xush kelibsiz</h2>
          <p>Hisobingizga kirish uchun ma'lumotlarni kiriting</p>
        </div>
        
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Elektron pochta</label>
            <input 
              type="email" 
              id="email" 
              placeholder="example@mail.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Maxfiy so'z</label>
            <input 
              type="password" 
              id="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          
          <button type="submit" className="submit-btn">
            Tizimga kirish
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
