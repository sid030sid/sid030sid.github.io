<h2 id="projects" style="margin: 2px 0px -15px;">Projects</h2>

<div class="publications">
  
  <div style="margin-bottom: 20px;">
    <label for="project-topic-filter" style="font-weight: bold; margin-right: 10px;">Filter by Topic:</label>
    <select id="project-topic-filter" style="padding: 5px 10px; border-radius: 4px; border: 1px solid #ddd;">
      <option value="">All Topics</option>
      <option value="business">Business</option>
      <option value="data and ai">Data and AI</option>
      <option value="decentralized systems">Decentralized Systems</option>
      <!-- <option value="data science">Data Science</option> -->
      <!-- <option value="data engineering">Data Engineering</option> -->
      <!-- <option value="data analysis">Data Analysis</option> -->
      <option value="software">Software</option>
      <!-- <option value="research">Research</option> -->
    </select>
  </div>

<ol class="bibliography">

{% for link in site.data.projects.main %}

<li class="project-item" data-topics="{{ link.topics | join: ',' }}">
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if link.image %} 
    <img src="{{ link.image | relative_url }}" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
    {% if link.conference_short %} 
    <abbr class="badge">{{ link.conference_short }}</abbr>
    {% endif %}
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title"><a href="{{ link.pdf | relative_url }}">{{ link.title }}</a></div>
      <div class="author">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em>
      </div>
    <div class="links">
      {% if link.pdf %} 
      <a href="{{ link.pdf | relative_url }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a>
      {% endif %}
      {% if link.code %} 
      <a href="{{ link.code | relative_url }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
      {% endif %}
      {% if link.page %} 
      <a href="{{ link.page | relative_url }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Project Page</a>
      {% endif %}
      {% if link.demo_video %} 
      <a href="{{ link.demo_video | relative_url }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Demo</a>
      {% endif %}
      {% if link.bibtex %} 
      <a href="{{ link.bibtex | relative_url }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">BibTex</a>
      {% endif %}
      {% if link.notes %} 
      <strong> <i style="color:#e74d3c">{{ link.notes }}</i></strong>
      {% endif %}
      {% if link.others %} 
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>
<br>

{% endfor %}

</ol>
</div>
