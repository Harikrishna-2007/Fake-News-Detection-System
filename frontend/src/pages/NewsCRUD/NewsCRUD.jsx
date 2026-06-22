import { useState } from "react";
import "./NewsCRUD.css";

export default function NewsCRUD() {
const [title, setTitle] = useState("");
const [content, setContent] = useState("");
const [source, setSource] = useState("");
const [category, setCategory] = useState("");

const [newsList, setNewsList] = useState([]);
const [editIndex, setEditIndex] = useState(null);
const [searchTerm, setSearchTerm] = useState("");

const filteredNews = newsList.filter((news) =>
news.title.toLowerCase().includes(searchTerm.toLowerCase())
);

const handleSubmit = (e) => {
  e.preventDefault();

  console.log("Add News Clicked");

  



if (!title || !content || !source || !category) {
  alert("Please fill all fields");
  return;
}

const newsData = {
  title,
  content,
  source,
  category,
};

if (editIndex !== null) {
  const updatedList = [...newsList];
  updatedList[editIndex] = newsData;
  setNewsList(updatedList);
  setEditIndex(null);
} else {
  setNewsList([...newsList, newsData]);
}

setTitle("");
setContent("");
setSource("");
setCategory("");


};

const handleEdit = (index) => {
const item = newsList[index];


setTitle(item.title);
setContent(item.content);
setSource(item.source);
setCategory(item.category);

setEditIndex(index);


};

const handleDelete = (index) => {
const updatedList = newsList.filter((_, i) => i !== index);
setNewsList(updatedList);
};

return ( <div className="crud-container"> <h1>Fake News Management</h1>


  <form onSubmit={handleSubmit} className="crud-form">
    <input
      type="text"
      placeholder="News Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />

    <textarea
      placeholder="News Content"
      value={content}
      onChange={(e) => setContent(e.target.value)}
    />

    <input
      type="text"
      placeholder="News Source"
      value={source}
      onChange={(e) => setSource(e.target.value)}
    />

    <input
      type="text"
      placeholder="Category"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    />

    <button type="submit">
      {editIndex !== null ? "Update News" : "Add News"}
    </button>
  </form>

  <input
    type="text"
    placeholder="Search News..."
    className="search-box"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />

  <p className="record-count">
    Total Records: {filteredNews.length}
  </p>

  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Source</th>
        <th>Category</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      {filteredNews.length === 0 ? (
        <tr>
          <td colSpan="4" className="no-data">
            No records found
          </td>
        </tr>
      ) : (
        filteredNews.map((item, index) => (
          <tr key={index}>
            <td>{item.title}</td>
            <td>{item.source}</td>
            <td>{item.category}</td>

            <td>
              <button
                className="edit-btn"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      )}
    </tbody>
  </table>
</div>


);
}
