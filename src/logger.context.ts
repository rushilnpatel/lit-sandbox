import { createContext } from '@lit/context';


// export type Logger = {
//     value: string,
//     // additional_info: {
//     //     userType?: 'team_member' | 'admin',
//     //     lastLogin?: string,
//     //     group?: ['orange' | 'green' | 'purple']
//     // }
// }

export type consoleLoggerContext = {
    value: string,
    setValue: (v: string) => void;
}

export const loggerContext = createContext<string>('logger');

export const consoleLoggerContext = createContext<consoleLoggerContext>('console-logger');