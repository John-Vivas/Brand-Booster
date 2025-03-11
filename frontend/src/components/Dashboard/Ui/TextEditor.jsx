import { useState } from 'react';
import { Bold, Italic, Underline, List, AlignLeft, AlignCenter, AlignRight, Image, Link as LinkIcon, MoreHorizontal } from 'lucide-react';

const TextEditor = ({ initialValue = '', onChange }) => {
    const [content, setContent] = useState(initialValue);

    const handleChange = (e) => {
        const newContent = e.target.value;
        setContent(newContent);
        if (onChange) {
            onChange(newContent);
        }
    };

    return (
        <div className="border border-gray-300 rounded-md overflow-hidden">
            <div className="flex flex-wrap items-center border-b border-gray-300 bg-gray-50 px-2 py-1">
                <ToolbarButton icon={<Bold size={16} />} tooltip="Bold" />
                <ToolbarButton icon={<Italic size={16} />} tooltip="Italic" />
                <ToolbarButton icon={<Underline size={16} />} tooltip="Underline" />
                <ToolbarDivider />
                <ToolbarButton icon={<List size={16} />} tooltip="Bullet list" />
                <ToolbarDivider />
                <ToolbarButton icon={<AlignLeft size={16} />} tooltip="Align left" />
                <ToolbarButton icon={<AlignCenter size={16} />} tooltip="Align center" />
                <ToolbarButton icon={<AlignRight size={16} />} tooltip="Align right" />
                <ToolbarDivider />
                <ToolbarButton icon={<Image size={16} />} tooltip="Insert image" />
                <ToolbarButton icon={<LinkIcon size={16} />} tooltip="Insert link" />
                <ToolbarDivider />
                <ToolbarButton icon={<MoreHorizontal size={16} />} tooltip="More options" />
            </div>
            <textarea
                className="w-full p-3 min-h-[150px] focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={content}
                onChange={handleChange}
                placeholder="Describe your product..."
            />
        </div>
    );
};

const ToolbarButton = ({ icon, tooltip }) => (
    <button
        type="button"
        className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded"
        title={tooltip}
    >
        {icon}
    </button>
);

const ToolbarDivider = () => (
    <div className="h-4 w-px bg-gray-300 mx-1"></div>
);

export default TextEditor;