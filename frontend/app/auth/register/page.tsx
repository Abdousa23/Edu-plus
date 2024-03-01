import React from 'react'

export default function page() {

    
  
    const content = (
        <main>
            <div>
                <h1>Register</h1>
                <form>
                    <div>
                        <label>
                            Email
                            <input type="email" name="email" required />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password
                            <input type="password" name="password" required />
                        </label>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </main>
    )
  
    return content
}
