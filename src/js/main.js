(function () {
  'use strict'
  var schema = [
    {
      type: 'row',
      content: [
        {
          type: 'input-text',
          placeholder: 'First name',
          name: 'first-name',
          colClass: {
            md: 6
          }
        },
        {
          type: 'input-text',
          placeholder: 'Last name',
          name: 'last-name',
          colClass: {
            md: 6
          }
        }
      ]
    },
    {
      type: 'row',
      content: [
        {
          type: 'input-text',
          placeholder: 'Email',
          name: 'email',
          colClass: {
            md: 4
          }
        },
        {
          type: 'input-text',
          placeholder: 'Phone',
          name: 'phone',
          colClass: {
            md: 4
          }
        },
        {
          type: 'input-text',
          placeholder: 'Address',
          name: 'address',
          colClass: {
            md: 4
          }
        }
      ]
    },
    {
      type: 'row',
      content: [
        {
          type: 'input-text',
          placeholder: 'CVV2',
          name: 'cvv2',
          colClass: {
            md: 6
          }
        },
        {
          type: 'input-number',
          placeholder: 'Year',
          name: 'year',
          colClass: {
            md: 6
          }
        }
      ]
    },
    {
      type: 'row',
      content: [
        {
          type: 'input-password',
          placeholder: 'Password',
          name: 'password',
          colClass: {
            md: 12
          }
        }
      ]
    },
    {
      type: "row",
      content: [
        {
          type: "button-submit",
          value: "Submit",
          colClass: {
            md: 12
          }
        }
      ]
    }
  ]

var formBuilderTypes = {
    "row": function (context) {
      var $elem = document.createElement('div');

      $elem.className = 'row padding-10';
      formBuilder($elem, context.content);
      return $elem;
    },
    "input-text": function (context) {
      var $parent = document.createElement('div')
        , $inputGroup = document.createElement('div')
        , $elem = document.createElement('input');

      for (var key in context.colClass) {
        $parent.classList.add('col-' + key + '-' + context.colClass[key]);
      }
      
      $inputGroup.classList.add('input-group');

      $elem.setAttribute('type', 'text');
      $elem.setAttribute('name', context.name);
      $elem.setAttribute('placeholder', context.placeholder);
      $elem.classList.add('form-control');

      $inputGroup.appendChild($elem);
      $parent.appendChild($inputGroup);
      return $parent;
    },
    "input-number": function (context) {
      var $parent = document.createElement('div')
        , $inputGroup = document.createElement('div')
        , $elem = document.createElement('input');
      
      for (var key in context.colClass) {
        $parent.classList.add('col-' + key + '-' + context.colClass[key]);
      }

      $inputGroup.classList.add('input-group');

      $elem.setAttribute('type', 'number');
      $elem.setAttribute('name', context.name);
      $elem.setAttribute('placeholder', context.placeholder);
      $elem.classList.add('form-control');

      $inputGroup.appendChild($elem);
      $parent.appendChild($inputGroup);
      return $parent;
    },
    "input-password": function (context) {
      var $parent = document.createElement('div')
        , $inputGroup = document.createElement('div')
        , $elem = document.createElement('input');
      
      for (var key in context.colClass) {
        $parent.classList.add('col-' + key + '-' + context.colClass[key]);
      }

      $inputGroup.classList.add('input-group');

      $elem.setAttribute('type', 'password');
      $elem.setAttribute('name', context.name);
      $elem.setAttribute('placeholder', context.placeholder);
      $elem.classList.add('form-control');

      $inputGroup.appendChild($elem);
      $parent.appendChild($inputGroup);
      return $parent;
    },
    "button-submit": function (context) {
      var $parent = document.createElement('div')
        , $elem = document.createElement('button');
      
      for (var key in context.colClass) {
        $parent.classList.add('col-' + key + '-' + context.colClass[key]);
      }

      $elem.className = 'btn btn-primary';
      $elem.setAttribute('type', 'submit');
      $elem.innerHTML = context.value;
      $parent.appendChild($elem);
      return $parent;
    }
  };

  onload = function () {
    var $buildButton = document.getElementById('build-form-button')
      , $form = document.getElementById('generated-form')
      , $formContainer = $form.querySelector('div.container');

    $buildButton.addEventListener('click', function () {

    formBuilder($formContainer, schema);
    this.classList.add('invisible');
    });
  }

  function formBuilder (formEl, formSchema) {
    formSchema.forEach(function (schemaItem) {
      var type = schemaItem.type;

      if (typeof formBuilderTypes[type] !== 'undefined') {
        var $elem = formBuilderTypes[type](schemaItem);
        formEl.appendChild($elem);
      }
      else {
        console.log('UNKNOWN', type);
      }
    });
  }
})();