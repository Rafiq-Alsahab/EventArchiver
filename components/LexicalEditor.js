// components/LexicalEditor.tsx
'use client';

import { useState } from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { LinkNode } from '@lexical/link';
import { ListItemNode, ListNode } from '@lexical/list';
import { TableNode, TableCellNode, TableRowNode } from '@lexical/table';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import ToolbarPlugin from './ToolbarPlugin';

const theme = {
  text: {
    bold: 'font-bold',
    italic: 'italic',
    underline: 'underline',
  },
};

function onError(error) {
  console.log(error);
}

const initialConfig = {
  namespace: 'MyEditor',
  theme,
  onError,
  nodes: [
    HeadingNode,
    QuoteNode,
    LinkNode,
    ListNode,
    ListItemNode,
    TableNode,
    TableCellNode,
    TableRowNode,
  ],
};

export default function LexicalEditor({
  initialValue = '',
  onChange,
}) {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="border rounded-lg overflow-hidden bg-black">
        <ToolbarPlugin />
        <div className="relative bg-black">
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="min-h-[200px] p-4 focus:outline-none" />
            }
            placeholder={
              <div className="absolute top-4 left-4 text-gray-400 pointer-events-none">
                Start typing...
              </div>  
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <LinkPlugin />
          <ListPlugin />
        </div>
      </div>
    </LexicalComposer>
  );
}