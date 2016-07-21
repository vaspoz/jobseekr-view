var SearchForm = React.createClass({
    render() {
        "use strict";
        return (
            <div>
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input class="mdl-textfield__input" type="text" id="sample3"/>
                    <label class="mdl-textfield__label" for="sample3">Text...</label>
                </div>
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="sample4"/>
                    <label class="mdl-textfield__label" for="sample4">Number...</label>
                    <span class="mdl-textfield__error">Input is not a number!</span>
                </div>
            </div>
        )
    }
});