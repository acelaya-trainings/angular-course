package de.vogella.jersey.todo.dao;

import java.util.HashMap;
import java.util.Map;

import de.vogella.jersey.todo.model.Todo;

public enum TodoDao {
  instance;
  
  private Map<String, Todo> contentProvider = new HashMap<String, Todo>();
  
  private TodoDao() {
    
    Todo todo = new Todo("1", "Learn REST");
    todo.setDescription("Read http://www.vogella.com/articles/REST/article.html");
    contentProvider.put("1", todo);
    todo = new Todo("2", "Do something");
    todo.setDescription("Read complete http://www.vogella.com");
    contentProvider.put("2", todo);
    
  }
  public Map<String, Todo> getModel(){
    return contentProvider;
  }
  
} 