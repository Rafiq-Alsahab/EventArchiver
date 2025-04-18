// components/ToolbarPlugin.tsx
'use client';

import { $getSelection, $isRangeSelection } from 'lexical';
import {
  $createHeadingNode,
  $createQuoteNode,
} from '@lexical/rich-text';
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
} from '@lexical/list';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $wrapNodes } from '@lexical/selection';

const ToolbarPlugin = () => {
  const [editor] = useLexicalComposerContext();

  const formatHeading = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $wrapNodes(selection, () => $createHeadingNode('h1'));
      }
    });
  };

  return (
    <div className="flex gap-2 p-2 border-b bg-gray-50">
      <button
        onClick={formatHeading}
        className="px-3 py-1 bg-white border rounded hover:bg-gray-100"
      >
        H1
      </button>
      <button
        onClick={() => editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND)}
        className="px-3 py-1 bg-white border rounded hover:bg-gray-100"
      >
        Bullet List
      </button>
    </div>
  );
};

export default ToolbarPlugin;