import { createContext, useContext, useMemo } from 'react'
import { IUser } from '../types'

interface IAuth {
    user: IUser | null
}

const AuthContext = createContext<IAuth>({
    user: null
})

interface AuthProviderProps {
    children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const user: IUser = {
        user: {
          name: "John Doe",
          email: "johndoe@gmail.com",
          accounts: [
            {
              type: "checking",
              balance: 1000.5
            },
            {
              type: "savings",
              balance: 2500
            }
          ]
        },
        transactions: [
          {
            type: "deposit",
            amount: 500,
            account: "checking"
          },
          {
            type: "withdrawal",
            amount: 100,
            account: "savings"
          },
          {
            type: "transfer",
            amount: 200,
            fromAccount: "checking",
            toAccount: "savings"
          }
        ],
        friends: [
          {
            name: "Jane Smith",
            email: "janesmith@gmail.com"
          },
          {
            name: "Bob Johnson",
            email: "bobjohnson@gmail.com"
          }
        ]
    }

    const memoedValue = useMemo(() => ({ user }), [user])

    return (
        <AuthContext.Provider value={memoedValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext)
}