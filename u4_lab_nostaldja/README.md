# Nostaldja Lab

![Nostalgia](https://www.zocalopublicsquare.org/wp-content/uploads/2022/02/nostalgia-L.jpg)

## Overview

In this lab, we'll build an app called Nostaldja, an app for tracking fads across decades.

## Instructions

1. Follow the [installation instructions](https://github.com/SEI-R-11-8/u4_django_install_and_models)
1. Set up your virtual environment and activate it.
1. Install dependencies.
1. Fulfill the listed requirements.


## Setup

Read through the setup instructions from our previous labs

The goal of this app is to have a full-CRUD application with multiple views.

## Requirements

 You'll need to create a new psql database for your app.

### Models

Create two models: `Decade` and `Fad`.

A `Decade` will have `Fad`s, or in other words a fad will have a foreign key for
a decade.

- Decades
  - start_year
- Fads
  - name
  - image_url
  - description
  - decade

### Seeding

To seed your database with some initial data, you'll need to create a
[data migration](https://docs.djangoproject.com/en/3.0/topics/migrations/#data-migrations).
Read the documentation on data migrations first, then **carefully** follow the
instructions below.

**_After_** you've run `makemigrations` and `migrate`, you can then run the
following to create a new, empty migration:

```sh
python3 manage.py makemigrations --empty nostaldja
```

Then, paste into the newly generated file the code below:

```py
from django.db import migrations

def seed(apps, schema_editor):
    Fad = apps.get_model('nostaldja', 'Fad')
    Decade = apps.get_model('nostaldja', 'Decade')
    eighties = Decade(start_year="1980s")
    nineties = Decade(start_year="1990s")
    oughts = Decade(start_year="2000s")
    tens = Decade(start_year="2010s")
    eighties.save()
    nineties.save()
    oughts.save()
    tens.save()

    Fad(decade = tens, name='Fidget Spinners', description='A fidget spinner is a toy that consists of a ball bearing in the center of a multi-lobed (typically two or three) flat structure made from metal or plastic designed to spin along its axis with little effort. Fidget spinners became popular toys in April 2017, although similar devices had been invented as early as 1993. ', image_url='https://www.dhresource.com/0x0s/f2-albu-g5-M01-79-07-rBVaJFiuqDSAF3I7AAKBk1FyKy0267.jpg/hand-spinner-fidget-spinner-tri-spinner-diy.jpg').save()
    Fad(decade = tens, name='Block Chain', description='A blockchain, originally block chain, is a continuously growing list of records, called blocks, which are linked and secured using cryptography. Each block typically contains a cryptographic hash of the previous block, a timestamp and transaction data. By design, a blockchain is inherently resistant to modification of the data.', image_url='http://sixpl.com/wp-content/uploads/2017/09/Blockchain-and-Cryptocurrency-Content-Writer.jpg').save()
    Fad(decade = oughts, name='Silly Bandz', description='Silly Bandz are rubber bands made of silicone rubber formed into shapes including animals, objects, numbers, and letters. ', image_url='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Silly_Bandz_2009.jpg/2560px-Silly_Bandz_2009.jpg').save()
    Fad(decade = oughts, name='iPods', description='iPhone - Phone = iPod', image_url='https://commons.wikimedia.org/wiki/File:Ipod-touch-1st-gen.jpg').save()
    Fad(decade = oughts, name='Myspace', description='Myspace (stylized as MySpace) is a social networking website offering an interactive, user-submitted network of friends, personal profiles, blogs, groups, photos, music, and videos. Myspace was the largest social networking site in the world, from 2004 to 2010.', image_url='https://us.hellomagazine.com/imagenes/travel/2018012645793/tom-myspace-founder-travel-photographer/0-230-700/myspace-tom-now-t.jpg').save()
    Fad(decade = nineties, name='JNCOs', description='JNCO, short for "Judge None Choose One", is a Los Angeles, California based clothing company specializing in boys\' and men\'s jeans.', image_url='https://img.buzzfeed.com/buzzfeed-static/static/2015-06/23/15/enhanced/webdr08/enhanced-22226-1435087265-4.jpg?downsize=715:*&output-format=auto&output-quality=auto').save()

def fallow(apps, schema_editor):
    Fad = apps.get_model('nostaldja', 'Fad')
    Decade = apps.get_model('nostaldja', 'Decade')
    Decade.objects.all().delete()
    Fad.objects.all().delete()
```

Then below, add only the line highlighted in green:

```diff
class Migration(migrations.Migration):


    dependencies = [
        ('nostaldja', '0006_auto_20180504_1246'),
    ]

    operations = [
+       migrations.RunPython(seed, fallow)
    ]

```

### URLs

Think about the URLs you will need for each resource (`Decade`s and `Fad`s).
Hint: both resources will need at least 4 URLs, one for each CRUD action.

Add these URLs to your `urls.py` file.

## Views

Build out some function in your views file to perform actions corresponding to
each URL. Again, you'll want full CRUD for each resource.

## Templates

Using your URLs and view functions, also build out some templates!

Aside from the base/layout template, you'll want templates like:

| Resource | Action         |
| -------- | -------------- |
| Fad      | Display all    |
| Fad      | Display detail |
| Fad      | Edit detail    |
| Decade   | Display all    |
| Decade   | Display detail |
| Decade   | Edit detail    |

## Bonus

Implement at least one of the following bonus options by working through the
appropriate section of the Django documentation as well as by doing your own
research.

### Social Authentication

Let's allow users to sign in using their favorite social media app.

Social Authentication is using social media platforms (like Facebook and
Twitter) for your authentication. For the remainder of class, work on getting
social authentication working (just pick 1 social platform you'd like to use for authentication) using
[`social-auth-app-django`](https://github.com/python-social-auth/social-app-django).

Use the [documentation](http://python-social-auth.readthedocs.io/en/latest/) or
[this walkthrough](https://simpleisbetterthancomplex.com/tutorial/2016/10/24/how-to-add-social-login-to-django.html).

### [Image Uploads](https://docs.djangoproject.com/en/3.0/topics/http/file-uploads/)

Add an `image` property to the `Fad` model and read through the documentation on
handling
[file uploads](https://docs.djangoproject.com/en/3.0/topics/http/file-uploads/).

### [Class-based Views](https://docs.djangoproject.com/en/3.0/topics/class-based-views/)

The views we've been writing have been functions, but Django provides the
ability to define views as Python classes. Read through the documentation on
[Class-based views](https://docs.djangoproject.com/en/3.0/topics/class-based-views/).

### [Testing](https://docs.djangoproject.com/en/3.0/topics/testing/)

Unit testing is a great way of making sure your code works the way you expect it
to. Read through the documentation on
[testing Django](https://docs.djangoproject.com/en/3.0/topics/testing/) and add
tests to your application.

### [Deployment](https://devcenter.heroku.com/articles/getting-started-with-python?singlepage=true)

How great would it be if you could deploy your app for others to use? Read
through the documentation on
[deploying Django](https://devcenter.heroku.com/articles/getting-started-with-python?singlepage=true) and
get your application out there.

> Note: If you pick deployment cause you think it's going to be easy (you've
> already done it before) then you may be in for a surprise. That's not to say
> that deploying Django applications is especially hard! Just that it wont
> necessarily be easier.

## Submission

- Pull request utilizing this template: [PR Guidelines](https://github.com/SEI-R-2-22/template_pull_request)
