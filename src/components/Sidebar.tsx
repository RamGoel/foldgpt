import {
    RiCloseLine,
    RiFoldersLine,
    RiMessage3Line,
    RiUser3Line,
    RiVideoLine,
} from 'react-icons/ri'
import { toggleSidebar } from '../utils'
import AccountTab from './tabs/AccountTab'
import { useState } from 'react'
import FoldersTab from './tabs/FoldersTab'
import TooltipProvider from './TooltipProvider'

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState<string>('account')
    return (
        <div className="border-l-[1px] border-zinc-800 !bg-zinc-900 sidebar">
            <div className="flex items-center justify-start p-3">
                <RiCloseLine
                    onClick={toggleSidebar}
                    className="text-zinc-400 text-xl w-[35px] h-[35px] cursor-pointer hover:text-violet-400 hover:bg-zinc-800 rounded-md p-2"
                />

                <div className="flex items-center justify-center gap-4 ml-auto">
                    <TooltipProvider text="Tutorial">
                        <RiVideoLine
                            onClick={() => {
                                window.open('https://www.youtube.com/watch?v=168tbnzi1lw', '_blank')
                            }}
                            className="text-zinc-400 text-xl w-[35px] h-[35px] cursor-pointer hover:text-violet-400 hover:bg-zinc-800 rounded-md p-2"
                        />
                    </TooltipProvider>
                    <TooltipProvider text="Folders">
                        <RiFoldersLine
                            onClick={() => setActiveTab('folders')}
                            className={`text-zinc-400 text-xl w-[35px] h-[35px] cursor-pointer hover:text-violet-400 hover:bg-zinc-800 rounded-md p-2 ${activeTab === 'folders' ? 'text-violet-400' : ''}`}
                        />
                    </TooltipProvider>
                    <TooltipProvider text="Account">
                        <RiUser3Line
                            onClick={() => setActiveTab('account')}
                            className={`text-zinc-400 text-xl w-[35px] h-[35px] cursor-pointer hover:text-violet-400 hover:bg-zinc-800 rounded-md p-2 ${activeTab === 'account' ? 'text-violet-400' : ''}`}
                        />
                    </TooltipProvider>
                    <TooltipProvider text="Prompts">
                        <RiMessage3Line
                            onClick={() => setActiveTab('settings')}
                            className={`text-zinc-400 text-xl w-[35px] h-[35px] cursor-pointer hover:text-violet-400 hover:bg-zinc-800 rounded-md p-2 ${activeTab === 'settings' ? 'text-violet-400' : ''}`}
                        />
                    </TooltipProvider>
                </div>
            </div>

            <div className="w-11/12 mx-auto mt-3">
                {
                    (activeTab === 'account' && <AccountTab />) ||
                        (activeTab === 'folders' && <FoldersTab />)
                    // activeTab==='settings' && <SettingsTab />
                }
            </div>
        </div>
    )
}

export default Sidebar
