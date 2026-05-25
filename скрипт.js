* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #fef8f0;
    color: #333;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
header {
    background: linear-gradient(135deg, #ff6b6b, #ff8e53);
    color: white;
    padding: 60px 0;
    text-align: center;
}

header h1 {
    font-size: 3rem;
    margin-bottom: 10px;
}

header p {
    font-size: 1.2rem;
    opacity: 0.95;
}

/* Navigation */
nav {
    background: #333;
    padding: 15px 0;
    position: sticky;
    top: 0;
    z-index: 100;
}

nav a {
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    margin: 0 5px;
    display: inline-block;
    transition: 0.3s;
    border-radius: 5px;
}

nav a:hover {
    background: #ff6b6b;
    transform: translateY(-2px);
}

/* Sections */
section {
    margin: 50px 0;
}

h2 {
    font-size: 2rem;
    margin-bottom: 30px;
    color: #ff6b6b;
    border-left: 4px solid #ff6b6b;
    padding-left: 15px;
}

/* Featured section */
.featured {
    margin-bottom: 60px;
}

.featured-card {
    display: flex;
    flex-direction: column;
    cursor: pointer;
}

.featured-card img {
    height: 400px;
    object-fit: cover;
}

.recipes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 30px;
}

.recipe-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
}

.recipe-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.recipe-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.recipe-content {
    padding: 20px;
}

.recipe-card h3 {
    font-size: 1.3rem;
    margin: 15px 15px 10px;
    color: #333;
}

.recipe-card p {
    margin: 0 15px 15px;
    color: #666;
}

.recipe-meta {
    margin: 0 15px 15px;
    display: flex;
    gap: 15px;
    color: #ff6b6b;
    font-size: 0.9rem;
}

/* Modal */
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    overflow-y: auto;
}

.modal-content {
    background-color: white;
    margin: 50px auto;
    padding: 0;
    width: 90%;
    max-width: 800px;
    border-radius: 20px;
    position: relative;
    animation: slideDown 0.3s ease;
}

@keyframes slideDown {
    from {
        transform: translateY(-50px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.close {
    position: absolute;
    right: 25px;
    top: 15px;
    font-size: 35px;
    font-weight: bold;
    cursor: pointer;
    color: #333;
    z-index: 1;
}

.close:hover {
    color: #ff6b6b;
}

.modal-recipe {
    padding: 30px;
}

.modal-recipe img {
    width: 100%;
    border-radius: 15px;
    margin: 20px 0;
}

.modal-recipe h2 {
    margin-top: 0;
}

.ingredients-list, .steps-list {
    margin: 20px 0;
    padding-left: 30px;
}

.ingredients-list li, .steps-list li {
    margin: 10px 0;
}

/* Footer */
footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 30px 0;
    margin-top: 50px;
}

/* Responsive */
@media (max-width: 768px) {
    header h1 {
        font-size: 2rem;
    }
    
    nav a {
        padding: 5px 10px;
        font-size: 0.9rem;
    }
    
    .recipes-grid {
        grid-template-columns: 1fr;
    }
    
    .modal-content {
        width: 95%;
        margin: 20px auto;
    }
}