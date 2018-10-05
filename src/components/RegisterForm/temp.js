<div>
  <FlatButton
    onClick={this.handleClickOpen}
    className="flat-button"
    label="Register"
    icon={<PersonAdd color={grey500} />}
  />
  <Dialog
    open={this.state.open}
    onClose={this.handleClose}
    aria-labelledby="form-dialog-title"
  >
  <h3>Sign Up</h3>
      <form onSubmit={this.handleSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input 
          type="text"
          placeholder="Name"
          autoFocus
          className="text-input"
          value={this.state.username}
          onChange={this.onNameChange}
        />
        <input 
          type="password"
          placeholder="Password"
          className="text-input"
          value={this.state.password}
          onChange={this.onPasswordChange}
        />
        <input 
          type="email"
          placeholder="Email"
          className="text-input"
          value={this.state.email}
          onChange={this.onEmailChange}
        />
        <input type="submit"/>
      </form>
    
      <FlatButton onClick={this.handleClose} color="primary">
        Cancel
      </FlatButton>
      <FlatButton onClick={this.handleClose} color="primary">
        Subscribe
      </FlatButton>

  </Dialog>
</div>



// with imports
<div>
        <FlatButton
          onClick={this.handleClickOpen}
          className="flat-button"
          label="Register"
          icon={<PersonAdd color={grey500} />}
        />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <h3>Sign Up</h3>
            <form onSubmit={this.handleSubmit}>
              {this.state.error && <p className="form__error">{this.state.error}</p>}
              <input 
                type="text"
                placeholder="Name"
                autoFocus
                className="text-input"
                value={this.state.username}
                onChange={this.onNameChange}
              />
              <input 
                type="password"
                placeholder="Password"
                className="text-input"
                value={this.state.password}
                onChange={this.onPasswordChange}
              />
              <input 
                type="email"
                placeholder="Email"
                className="text-input"
                value={this.state.email}
                onChange={this.onEmailChange}
              />
              <input type="submit"/>
            </form>
            
          </DialogContent>
          <DialogActions>
            <FlatButton onClick={this.handleClose} color="primary">
              Cancel
            </FlatButton>
            <FlatButton onClick={this.handleClose} color="primary">
              Subscribe
            </FlatButton>
          </DialogActions>
        </Dialog>
      </div>