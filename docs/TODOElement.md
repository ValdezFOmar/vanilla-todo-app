# TODOElement class

This class is a wrapper for creating a TODO element card with a title and a paragraph.
The TODO element creates a node structure of element equivalent to the following HTML:

```html

<li class='content-item'>
  <section class='card'>
    <div class='card-header'>
      <h2 class='card-title'>TODO title</h2>
      <button type='button' class='icon-button completed' name='completed'>
        <img src='icons/check-solid.svg' alt='Icon of a green check mark' class='icon-image'>
      </button>
      <button type='button' class='icon-button delete' name='delete'>
        <img src='icons/trash-solid.svg' alt='Icon of a red trash can' class='icon-image'>
      </button>
    </div>
    <p class='card-content'>
      TODO text goes here...
    </p>
  </section>
</li>
```

This element should be appended to the following container element:

```html
<ul class='none-list-style content'>
  <!-- <li> elements here -->
</ul>
```