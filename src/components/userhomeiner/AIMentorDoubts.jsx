import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SmartLearnAINavbar from './navbarside/SmartLearnAINavbar';

// SyllabusManager


  //  <SmartLearnAINavbar/>


// ConversationActions Component
const ConversationActions = ({ conversation, handleUpdate, handleDelete }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative ml-4">
      {/* Three Dot Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
        className="text-gray-500 hover:text-black text-lg px-2"
      >
        ⋯
      </button>
      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-200 rounded shadow-lg z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleUpdate(conversation);
              setOpen(false);
            }}
            className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
          >
            Update
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(conversation.conversation_id || conversation.id);
              setOpen(false);
            }}
            className="block w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-100"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

const AIMentorDoubts = () => {
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [currentConversationId, setCurrentConversationId] = useState(null);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [conversationsLoading, setConversationsLoading] = useState(false);
  const [messagesLoading, setMessagesLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // State for new conversation modal
  const [showNewConversationModal, setShowNewConversationModal] = useState(false);
  const [newConversationTitle, setNewConversationTitle] = useState('');
  const [creatingConversation, setCreatingConversation] = useState(false);

  // State for update conversation modal
  const [showUpdateConversationModal, setShowUpdateConversationModal] = useState(false);
  const [updateConversationTitle, setUpdateConversationTitle] = useState('');
  const [updatingConversation, setUpdatingConversation] = useState(false);
  const [selectedConversationForUpdate, setSelectedConversationForUpdate] = useState(null);

  // Get access token from localStorage or your auth context
  const getAccessToken = () => {
    return localStorage.getItem('access_token') || '';
  };

  // Fetch all conversations on component mount
  useEffect(() => {
    fetchConversations();
  }, []);

  const fetchConversations = async () => {
    setConversationsLoading(true);
    try {
      const token = getAccessToken();
      const response = await axios.get('http://127.0.0.1:8001/api/qa/one_by_one_conversation', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      
      if (response.data) {
        setConversations(response.data);
      }
    } catch (err) {
      console.error('Failed to fetch conversations:', err);
      setError('Failed to load conversations');
    } finally {
      setConversationsLoading(false);
    }
  };

  const handleDelete = async (conversationId) => {
   

    try {
      const token = localStorage.getItem("access_token");
      await axios.delete(`http://127.0.0.1:8001/api/qa/${conversationId}/conversation_delete_onebyone`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      // Refresh conversations list
      await fetchConversations();
      
      // Clear chat if current conversation was deleted
      if (currentConversationId === conversationId) {
        setChatHistory([]);
        setCurrentConversationId(null);
        setCurrentConversation(null);
      }
    } catch (error) {
      console.error("Delete failed:", error.response?.data || error.message);
      setError('Failed to delete conversation');
    }
  };

  const handleUpdateClick = (conversation) => {
    setSelectedConversationForUpdate(conversation);
    setUpdateConversationTitle(conversation.title || '');
    setShowUpdateConversationModal(true);
  };

  const handleUpdate = async () => {
    if (!selectedConversationForUpdate) return;
    
    setUpdatingConversation(true);
    setError(null);

    try {
      const token = localStorage.getItem("access_token");
      const conversationId = selectedConversationForUpdate.conversation_id || selectedConversationForUpdate.id;
      
      const response = await axios.put(
        `http://127.0.0.1:8001/api/qa/${conversationId}/update_conversation_title`,
        { title: updateConversationTitle.trim() || 'New Conversation' },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      console.log("Updated:", response.data);

      // Refresh conversations list
      await fetchConversations();
      
      // Close modal and reset state
      setShowUpdateConversationModal(false);
      setSelectedConversationForUpdate(null);
      setUpdateConversationTitle('');
    } catch (error) {
      console.error('Update failed:', error);
      setError('Failed to update conversation');
    } finally {
      setUpdatingConversation(false);
    }
  };

  const handleCreateNewConversation = async () => {
    setCreatingConversation(true);
    setError(null);
    
    try {
      const token = getAccessToken();
      
      // Use provided title or default
      const title = newConversationTitle.trim() || 'New Conversation';
      
      const response = await axios.post(
        'http://127.0.0.1:8001/api/qa/create_new_conversation',
        { title: title },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        }
      );

      if (response.data) {
        // Refresh conversations list
        await fetchConversations();
        
        // Clear modal state
        setShowNewConversationModal(false);
        setNewConversationTitle('');
        
        // If conversation was created successfully, load it
        if (response.data.id) {
          setCurrentConversationId(response.data.id);
          setCurrentConversation(response.data);
          loadConversationMessages(response.data.id);
        } else {
          // Start fresh conversation
          setChatHistory([]);
          setQuestion('');
        }
      }
    } catch (err) {
      console.error('Failed to create conversation:', err);
      setError(err.response?.data?.message || 'Failed to create new conversation');
    } finally {
      setCreatingConversation(false);
    }
  };

  const handleAskQuestion = async () => {
    if (!question.trim()) return;

    const userMessage = {
      type: 'user',
      content: question,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatHistory(prev => [...prev, userMessage]);
    setLoading(true);
    setError(null);

    try {
      const token = getAccessToken();
      
      // Include conversation_id in the request if we're in an existing conversation
      const requestBody = {
        question: question,
        top_k: 5
      };
      
      // Add conversation_id if we're in an existing conversation
      if (currentConversationId) {
        requestBody.conversation_id = currentConversationId;
      }
      
      const response = await axios.post('http://127.0.0.1:8001/api/qa/ask', 
        requestBody,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        }
      );

      const data = response.data;

      const aiMessage = {
        type: 'ai',
        content: data.answer,
        sources: data.sources,
        confidence: data.confidence,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatHistory(prev => [...prev, aiMessage]);
      
      // If this was a new conversation (no currentConversationId), the API might return a conversation_id
      if (!currentConversationId && data.conversation_id) {
        setCurrentConversationId(data.conversation_id);
      }
      
      // Refresh conversations list after new question
      await fetchConversations();
      
      setQuestion('');
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to get response');
    } finally {
      setLoading(false);
    }
  };

  const loadConversationMessages = async (conversationId) => {
    setMessagesLoading(true);
    setError(null);
    
    try {
      const token = getAccessToken();
      const response = await axios.get(`http://127.0.0.1:8001/api/qa/${conversationId}/messages`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      
      if (response.data) {
        // Transform the messages into chat history format
        const messages = response.data;
        const formattedMessages = [];
        
        messages.forEach((item) => {
          // Add user question
          formattedMessages.push({
            type: 'user',
            content: item.question,
            timestamp: new Date(item.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          });
          
          // Add AI answer
          formattedMessages.push({
            type: 'ai',
            content: item.answer,
            sources: item.sources,
            confidence: item.confidence,
            timestamp: new Date(item.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          });
        });
        
        setChatHistory(formattedMessages);
        setCurrentConversationId(conversationId);
      }
    } catch (err) {
      console.error('Failed to load conversation messages:', err);
      setError('Failed to load conversation messages');
    } finally {
      setMessagesLoading(false);
    }
  };

  const handleConversationClick = (conversation) => {
    // Use either conversation.id or conversation.conversation_id based on your API response
    const convId = conversation.id || conversation.conversation_id;
    setCurrentConversationId(convId);
    setCurrentConversation(conversation);
    loadConversationMessages(convId);
  };

  const startNewConversation = () => {
    setShowNewConversationModal(true);
    setNewConversationTitle('');
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAskQuestion();
    }
  };

  const handleModalKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCreateNewConversation();
    }
  };

  const handleUpdateModalKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleUpdate();
    }
  };

  return (
    <div className="bg-gray-100 h-screen w-full font-sans text-black antialiased">
      <div className="relative flex h-screen w-full flex-col overflow-hidden">
        <SmartLearnAINavbar />

        <main className="flex flex-1 overflow-hidden">
          {/* Left Sidebar: Conversations */}
          <aside className="flex w-80 flex-col border-r border-solid border-gray-300 bg-white">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-sm font-bold uppercase tracking-wider text-black">Conversations</h3>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {conversationsLoading ? (
                <div className="flex justify-center items-center h-32">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col">
                  {conversations.length === 0 ? (
                    <div className="p-6 text-center text-gray-400">
                      <p className="text-sm">No conversations yet</p>
                    </div>
                  ) : (
                    conversations.map((conversation) => {
                      const convId = conversation.id || conversation.conversation_id;
                      return (
                        <div
                          key={convId}
                          className={`relative flex justify-between items-start border-b border-gray-200 p-4 hover:bg-gray-100 transition-colors ${
                            currentConversationId === convId ? 'bg-gray-50' : ''
                          }`}
                        >
                          <div
                            onClick={() => handleConversationClick(conversation)}
                            className="flex flex-col gap-1 cursor-pointer flex-1"
                          >
                            <span className="text-sm font-bold text-black line-clamp-1">
                              {conversation.title || 'New Conversation'}
                            </span>
                            <span className="text-xs text-gray-400">
                              {formatTimestamp(conversation.created_at)}
                            </span>
                            {conversation.message_count && (
                              <span className="text-xs text-gray-400 mt-1">
                                {conversation.message_count} messages
                              </span>
                            )}
                          </div>

                          {/* RIGHT SIDE (Three Dot Menu) */}
                          <ConversationActions
                            conversation={conversation}
                            handleUpdate={handleUpdateClick}
                            handleDelete={handleDelete}
                          />
                        </div>
                      );
                    })
                  )}
                </div>
              )}
            </div>

            <div className="p-4 bg-gray-50">
              <button
                onClick={startNewConversation}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-gray-400 py-3 text-sm font-medium text-gray-500 hover:border-black hover:text-black transition-all"
              >
                <span className="material-symbols-outlined text-sm">add</span>
                New Conversation
              </button>
            </div>
          </aside>

          {/* Main Chat Window */}
          <section className="flex flex-1 flex-col bg-white">
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
              <div className="mx-auto flex max-w-3xl flex-col gap-8">
                {messagesLoading ? (
                  <div className="flex justify-center items-center h-64">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                ) : chatHistory.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
                    <span className="material-symbols-outlined text-6xl mb-4">forum</span>
                    <p className="text-sm font-medium">Ask your doubt to get started</p>
                    <p className="text-xs mt-2">Type your question below and click Solve</p>
                  </div>
                ) : (
                  chatHistory.map((message, index) => (
                    message.type === 'user' ? (
                      // User Question Message
                      <div key={index} className="flex flex-col items-end gap-2">
                        <div className="max-w-[85%] rounded border border-black bg-white p-4 shadow-sm">
                          <p className="text-[15px] leading-relaxed text-black whitespace-pre-wrap">
                            {message.content}
                          </p>
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                          You • {message.timestamp}
                        </span>
                      </div>
                    ) : (
                      // AI Answer Message
                      <div key={index} className="flex flex-col items-start gap-2">
                        <div className="max-w-[85%] rounded bg-gray-50 p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="material-symbols-outlined text-lg text-black">smart_toy</span>
                            <span className="text-xs font-bold uppercase text-black tracking-widest">AI</span>
                          </div>
                          <p className="text-[15px] leading-relaxed text-black whitespace-pre-wrap">
                            {message.content}
                          </p>

                          {/* Sources Section */}
                          {message.sources && message.sources.length > 0 && message.content !== "No answer found in textbook." && (
                            <div className="mt-6 pt-4 border-t border-gray-200">
                              <p className="text-xs font-bold uppercase text-gray-500 mb-3">Sources:</p>
                              <div className="space-y-3">
                                {message.sources.map((source, idx) => (
                                  <div key={idx} className="bg-white p-3 rounded border border-gray-200">
                                    <div className="flex items-center gap-2 mb-2">
                                      <span className="material-symbols-outlined text-sm text-gray-400">
                                        library_books
                                      </span>
                                      <span className="text-xs font-semibold text-gray-700">
                                        {source.chapter || 'Reference'}
                                      </span>
                                      <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded ml-auto">
                                        {Math.round(source.similarity * 100)}% match
                                      </span>
                                    </div>
                                    {source.topic && (
                                      <p className="text-xs font-medium text-gray-700 mb-1">
                                        Topic: {source.topic}
                                      </p>
                                    )}
                                    <p className="text-xs text-gray-600 italic">
                                      "{source.text_preview}"
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 pl-1">
                          {message.timestamp}
                        </span>
                      </div>
                    )
                  ))
                )}

                {loading && (
                  <div className="flex flex-col items-start gap-2">
                    <div className="rounded bg-gray-50 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-lg text-black">smart_toy</span>
                        <span className="text-xs font-bold uppercase text-black tracking-widest">AI Mentor</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="flex flex-col items-start gap-2">
                    <div className="rounded bg-red-50 p-4 border border-red-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-lg text-red-500">error</span>
                        <span className="text-xs font-bold uppercase text-red-500">Error</span>
                      </div>
                      <p className="text-sm text-red-600">{error}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-300 bg-white p-6">
              <div className="mx-auto flex max-w-4xl flex-col gap-4">
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <textarea
                      className="w-full resize-none rounded-lg border border-black bg-white px-4 py-3 text-[15px] text-black focus:outline-none focus:ring-2 focus:ring-black/20"
                      placeholder="Type your doubt here..."
                      rows="1"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      onKeyPress={handleKeyPress}
                      disabled={loading}
                    />
                  </div>
                  <button
                    onClick={handleAskQuestion}
                    disabled={loading || !question.trim()}
                    className={`flex h-[46px] items-center justify-center gap-2 rounded px-8 text-sm font-bold tracking-widest text-white uppercase transition-colors ${
                      loading || !question.trim()
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-black hover:bg-gray-800'
                    }`}
                  >
                    <span>{loading ? '...' : 'Solve'}</span>
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Update Conversation Modal */}
      {showUpdateConversationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-full mx-4">
            <h3 className="text-lg font-bold mb-4">Rename Conversation</h3>
            
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-black/20"
              placeholder="Enter conversation title"
              value={updateConversationTitle}
              onChange={(e) => setUpdateConversationTitle(e.target.value)}
              onKeyPress={handleUpdateModalKeyPress}
              autoFocus
            />
            
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowUpdateConversationModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
                disabled={updatingConversation}
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                disabled={updatingConversation}
                className={`px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors ${
                  updatingConversation 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-black hover:bg-gray-800'
                }`}
              >
                {updatingConversation ? 'Updating...' : 'Update'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Conversation Modal */}
      {showNewConversationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-full mx-4">
            <h3 className="text-lg font-bold mb-4">Start New Conversation</h3>
            
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-black/20"
              placeholder="Enter conversation title (optional)"
              value={newConversationTitle}
              onChange={(e) => setNewConversationTitle(e.target.value)}
              onKeyPress={handleModalKeyPress}
              autoFocus
            />
            
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowNewConversationModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
                disabled={creatingConversation}
              >
                Cancel
              </button>
              <button
                onClick={handleCreateNewConversation}
                disabled={creatingConversation}
                className={`px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors ${
                  creatingConversation 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-black hover:bg-gray-800'
                }`}
              >
                {creatingConversation ? 'Creating...' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e5e5;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d4d4d4;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        
        .animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default AIMentorDoubts;