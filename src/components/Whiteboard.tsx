import React from 'react';
import RoomWhiteboard from './study-room/RoomWhiteboard';

interface WhiteboardProps {
    whiteboardId: string;
}

const Whiteboard: React.FC<WhiteboardProps> = ({ whiteboardId: _whiteboardId }) => {
    return (
        <div className="h-[600px] w-full border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden bg-white relative touch-none shadow-sm">
            <RoomWhiteboard />
        </div>
    );
};

export default Whiteboard;
