import React, { useState } from 'react';

export default function ProjectShowcase() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Color Clock",
      description: "A simple app that has the time and date, with some fun colors."
    },
    {
      id: 2,
      title: "JS Calculator",
      description: "A simple calculator built with JavaScript."
    },
    {
      id: 3,
      title: "SPA Dictionary",
      description: "A single page application that allows users to search for word definitions."
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdd = () => {
    if (!title.trim() || !description.trim()) {
      alert('Please fill in both title and description');
      return;
    }
    
    const newProject = {
      id: Date.now(),
      title: title,
      description: description
    };
    
    setProjects([...projects, newProject]);
    setTitle('');
    setDescription('');
  };

  const handleDelete = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      backgroundColor: '#00fdff',
      boxSizing: 'border-box',
      padding: '50px 20px'
    }}>

      <h1 style={{
        fontSize: '36px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '40px',
        color: 'black'
      }}>
        Personal Project Showcase App
      </h1>

      <div style={{
        backgroundColor: '#ff0e9d',
        borderRadius: '8px',
        border: '2px solid #111827',
        padding: '40px',
        marginBottom: '40px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          marginBottom: '30px',
          color: '#111827'
        }}>
          Add Project
        </h2>
        
        <div>
          <label style={{
            display: 'block',
            fontSize: '20px',
            fontWeight: '600',
            marginBottom: '10px',
            color: '#111827'
          }}>
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '2px solid #111827',
              borderRadius: '4px',
              fontSize: '16px',
              marginBottom: '20px',
              boxSizing: 'border-box'
            }}
            placeholder="Enter project title"
          />

          <label style={{
            display: 'block',
            fontSize: '20px',
            fontWeight: '600',
            marginBottom: '10px',
            color: '#111827'
          }}>
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '2px solid #111827',
              borderRadius: '4px',
              fontSize: '16px',
              marginBottom: '20px',
              boxSizing: 'border-box',
              fontFamily: 'inherit',
              resize: 'vertical'
            }}
            placeholder="Enter project description"
          />

          <button
            onClick={handleAdd}
            style={{
              padding: '12px 32px',
              backgroundColor: 'white',
              border: '2px solid #111827',
              borderRadius: '4px',
              fontSize: '20px',
              fontWeight: '600',
              color: '#111827',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#f3f4f6'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
          >
            Add
          </button>
        </div>
      </div>

      <div style={{
        backgroundColor: '#ff0e9d',
        borderRadius: '8px',
        border: '2px solid #111827',
        padding: '40px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <input
          type="text"
          placeholder="Search Projects"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 16px',
            border: '2px solid #111827',
            borderRadius: '4px',
            fontSize: '16px',
            marginBottom: '30px',
            boxSizing: 'border-box'
          }}
        />

        <div>
          {filteredProjects.length === 0 ? (
            <p style={{
              textAlign: 'center',
              color: '#6b7280',
              padding: '40px 0',
              fontSize: '16px'
            }}>
              No projects found
            </p>
          ) : (
            filteredProjects.map((project, index) => (
              <div
                key={project.id}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px',
                  paddingBottom: '20px',
                  borderBottom: index !== filteredProjects.length - 1 ? '2px solid #e5e7eb' : 'none',
                  marginBottom: index !== filteredProjects.length - 1 ? '20px' : '0'
                }}
              >
                <button
                  onClick={() => handleDelete(project.id)}
                  style={{
                    flexShrink: 0,
                    width: '64px',
                    height: '64px',
                    border: '2px solid #111827',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backgroundColor: 'white'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
                  aria-label="Delete project"
                >
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{ color: '#111827' }}
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>

                <div style={{ flex: 1, paddingTop: '8px' }}>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: '#111827'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    fontSize: '18px',
                    color: '#374151'
                  }}>
                    {project.description}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}