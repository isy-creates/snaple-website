<?php get_header(); ?>

<main class="main frontpage">

  <section class="section frontpage__intro">
    <h1><?php the_field('headline'); ?></h1>
    <h2>testtest</h2>
    <p class="has-medium-font-size"><?php the_field('introtext'); ?></p>
  </section>
  <section class="section frontpage__articles">
    <?php

      $args = array( 
          'posts_per_page' => -1
      );
  
      $query = new WP_Query($args);   
      $q = array();
  
      while ( $query->have_posts() ) { 
  
          $query->the_post(); 

          
          $a = '<a href="'. get_permalink() .'"></a>'. get_the_post_thumbnail() .'<h4>' . get_the_title() .'</h4>';
  
          $categories = get_the_category();
  
          foreach ( $categories as $key=>$category ) {
  
              $b = '<li class="layout__headline '. strtolower($category->name) . '"><h3>' . $category->name . '</h3></li>';      
  
          }
  
          $q[$b][] = $a; // Create an array with the category names and post titles
      }
  
      /* Restore original Post Data */
      wp_reset_postdata();


  
      foreach ($q as $key=>$values) {
  
          echo '<ul class="layout">';
          echo $key;
              foreach ($values as $value){
                  echo '<li class="layout__content">' . $value . '</li>';
              }
          echo '</ul>';
      }
    ?>
  </section>

  <div class="decolines">
    <span class="decoline"></span>
    <span class="decoline"></span>
    <span class="decoline"></span>
    <span class="decoline"></span>
    <span class="decoline"></span>
    <span class="decoline"></span>
  </div>
</main>

<?php get_footer(); ?>